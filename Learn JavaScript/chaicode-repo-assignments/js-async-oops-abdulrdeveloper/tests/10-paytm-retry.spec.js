import {
  PaymentError,
  InsufficientFundsError,
  NetworkError,
  FraudDetectedError,
  processPayment,
  retryPayment,
  processWithFallback,
  categorizeError,
} from '../src/10-paytm-retry.js';

describe('10 - Paytm Retry: Custom Errors & Retry Logic (9 pts)', () => {
  describe('Custom Error classes', () => {
    test('PaymentError has correct name, code, and amount', () => {
      const err = new PaymentError('Test error', 'TEST', 100);
      expect(err.name).toBe('PaymentError');
      expect(err.code).toBe('TEST');
      expect(err.amount).toBe(100);
      expect(err.message).toBe('Test error');
      expect(err instanceof Error).toBe(true);
    });

    test('InsufficientFundsError extends PaymentError correctly', () => {
      const err = new InsufficientFundsError(500, 100);
      expect(err.name).toBe('InsufficientFundsError');
      expect(err.code).toBe('INSUFFICIENT_FUNDS');
      expect(err.message).toBe('Insufficient funds: need 500, have 100');
      expect(err.balance).toBe(100);
      expect(err.amount).toBe(500);
      expect(err instanceof PaymentError).toBe(true);
      expect(err instanceof Error).toBe(true);
    });

    test('NetworkError extends PaymentError with retryable = true', () => {
      const err = new NetworkError(200);
      expect(err.name).toBe('NetworkError');
      expect(err.code).toBe('NETWORK_ERROR');
      expect(err.message).toBe('Network error during transaction');
      expect(err.retryable).toBe(true);
      expect(err instanceof PaymentError).toBe(true);
    });

    test('FraudDetectedError extends PaymentError with retryable = false', () => {
      const err = new FraudDetectedError(200000);
      expect(err.name).toBe('FraudDetectedError');
      expect(err.code).toBe('FRAUD_DETECTED');
      expect(err.message).toBe('Suspicious transaction detected');
      expect(err.retryable).toBe(false);
      expect(err instanceof PaymentError).toBe(true);
    });
  });

  describe('processPayment function', () => {
    test('processPayment returns success for valid payment', async () => {
      const result = await processPayment(100, 500, 'online');
      expect(result.transactionId).toMatch(/^TXN/);
      expect(result.amount).toBe(100);
      expect(result.status).toBe('success');
      expect(result).toHaveProperty('timestamp');
    });

    test('processPayment throws PaymentError for invalid amount', async () => {
      try {
        await processPayment(-100, 500, 'online');
        expect(true).toBe(false); // should not reach here
      } catch (e) {
        expect(e instanceof PaymentError).toBe(true);
        expect(e.code).toBe('INVALID_AMOUNT');
      }
    });

    test('processPayment throws InsufficientFundsError when amount > balance', async () => {
      try {
        await processPayment(500, 100, 'online');
        expect(true).toBe(false);
      } catch (e) {
        expect(e instanceof InsufficientFundsError).toBe(true);
        expect(e.balance).toBe(100);
      }
    });

    test('processPayment throws NetworkError for offline status', async () => {
      try {
        await processPayment(100, 500, 'offline');
        expect(true).toBe(false);
      } catch (e) {
        expect(e instanceof NetworkError).toBe(true);
        expect(e.retryable).toBe(true);
      }
    });

    test('processPayment throws FraudDetectedError for amount > 100000', async () => {
      try {
        await processPayment(200000, 500000, 'online');
        expect(true).toBe(false);
      } catch (e) {
        expect(e instanceof FraudDetectedError).toBe(true);
        expect(e.retryable).toBe(false);
      }
    });
  });

  describe('retryPayment function', () => {
    test('retryPayment succeeds on first try', async () => {
      const result = await retryPayment(
        () => processPayment(100, 500, 'online'),
        3,
        50
      );
      expect(result.status).toBe('success');
    });

    test('retryPayment retries on NetworkError', async () => {
      let callCount = 0;
      const fn = async () => {
        callCount++;
        if (callCount < 3) throw new NetworkError(100);
        return { status: 'success', amount: 100 };
      };
      const result = await retryPayment(fn, 3, 10);
      expect(result.status).toBe('success');
      expect(callCount).toBe(3);
    });

    test('retryPayment does NOT retry on non-NetworkError', async () => {
      let callCount = 0;
      const fn = async () => {
        callCount++;
        throw new FraudDetectedError(200000);
      };
      await expect(retryPayment(fn, 3, 10)).rejects.toThrow('Suspicious transaction detected');
      expect(callCount).toBe(1);
    });

    test('retryPayment throws after all retries exhausted', async () => {
      const fn = async () => {
        throw new NetworkError(100);
      };
      await expect(retryPayment(fn, 2, 10)).rejects.toThrow('Network error during transaction');
    });
  });

  describe('processWithFallback function', () => {
    test('processWithFallback returns primary result on success', async () => {
      const result = await processWithFallback(
        () => processPayment(100, 500, 'online'),
        () => processPayment(100, 500, 'online')
      );
      expect(result.status).toBe('success');
    });

    test('processWithFallback uses fallback when primary fails', async () => {
      const result = await processWithFallback(
        () => processPayment(100, 500, 'offline'),
        () => processPayment(100, 500, 'online')
      );
      expect(result.status).toBe('success');
    });

    test('processWithFallback throws PaymentError when both fail', async () => {
      try {
        await processWithFallback(
          () => processPayment(100, 500, 'offline'),
          () => processPayment(100, 500, 'offline')
        );
        expect(true).toBe(false);
      } catch (e) {
        expect(e instanceof PaymentError).toBe(true);
        expect(e.code).toBe('BOTH_FAILED');
      }
    });
  });

  describe('categorizeError function', () => {
    test('categorizes InsufficientFundsError correctly', () => {
      const result = categorizeError(new InsufficientFundsError(500, 100));
      expect(result).toEqual({
        type: 'insufficient_funds',
        retryable: false,
        message: 'Insufficient funds: need 500, have 100',
      });
    });

    test('categorizes NetworkError correctly', () => {
      const result = categorizeError(new NetworkError(200));
      expect(result).toEqual({
        type: 'network',
        retryable: true,
        message: 'Network error during transaction',
      });
    });

    test('categorizes FraudDetectedError correctly', () => {
      const result = categorizeError(new FraudDetectedError(200000));
      expect(result).toEqual({
        type: 'fraud',
        retryable: false,
        message: 'Suspicious transaction detected',
      });
    });

    test('categorizes unknown errors correctly', () => {
      const result = categorizeError(new Error('Something happened'));
      expect(result).toEqual({
        type: 'unknown',
        retryable: false,
        message: 'Something happened',
      });
    });
  });
});
