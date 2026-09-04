import { upiRetry } from '../src/09-upi-retry.js';

describe('09 - Bunty ka UPI Payment Retry (8 pts)', () => {

  describe('Successful payments', () => {
    test('Success on first attempt', () => {
      expect(upiRetry(["success"])).toEqual({
        attempts: 1, success: true, totalWaitTime: 0
      });
    });

    test('Fail once then succeed', () => {
      expect(upiRetry(["fail", "success"])).toEqual({
        attempts: 2, success: true, totalWaitTime: 1
      });
    });

    test('Fail twice then succeed', () => {
      expect(upiRetry(["fail", "fail", "success"])).toEqual({
        attempts: 3, success: true, totalWaitTime: 3
      });
    });

    test('Fail three times then succeed', () => {
      expect(upiRetry(["fail", "fail", "fail", "success"])).toEqual({
        attempts: 4, success: true, totalWaitTime: 7
      });
    });

    test('Fail four times then succeed on 5th', () => {
      expect(upiRetry(["fail", "fail", "fail", "fail", "success"])).toEqual({
        attempts: 5, success: true, totalWaitTime: 15
      });
    });
  });

  describe('All attempts fail', () => {
    test('All 5 attempts fail', () => {
      expect(upiRetry(["fail", "fail", "fail", "fail", "fail"])).toEqual({
        attempts: 5, success: false, totalWaitTime: 15
      });
    });

    test('More outcomes than max attempts - stops at 5', () => {
      expect(upiRetry(["fail", "fail", "fail", "fail", "fail", "success"])).toEqual({
        attempts: 5, success: false, totalWaitTime: 15
      });
    });
  });

  describe('Exponential backoff wait times', () => {
    test('Wait 1s after first fail', () => {
      expect(upiRetry(["fail", "success"]).totalWaitTime).toBe(1);
    });

    test('Wait 1+2=3s after two fails', () => {
      expect(upiRetry(["fail", "fail", "success"]).totalWaitTime).toBe(3);
    });

    test('Wait 1+2+4=7s after three fails', () => {
      expect(upiRetry(["fail", "fail", "fail", "success"]).totalWaitTime).toBe(7);
    });

    test('Wait 1+2+4+8=15s after four fails', () => {
      expect(upiRetry(["fail", "fail", "fail", "fail", "success"]).totalWaitTime).toBe(15);
    });
  });

  describe('Validation', () => {
    test('Empty array returns zeroed object', () => {
      expect(upiRetry([])).toEqual({
        attempts: 0, success: false, totalWaitTime: 0
      });
    });

    test('Non-array returns zeroed object', () => {
      expect(upiRetry("fail")).toEqual({
        attempts: 0, success: false, totalWaitTime: 0
      });
    });

    test('null returns zeroed object', () => {
      expect(upiRetry(null)).toEqual({
        attempts: 0, success: false, totalWaitTime: 0
      });
    });

    test('undefined returns zeroed object', () => {
      expect(upiRetry(undefined)).toEqual({
        attempts: 0, success: false, totalWaitTime: 0
      });
    });
  });
});
