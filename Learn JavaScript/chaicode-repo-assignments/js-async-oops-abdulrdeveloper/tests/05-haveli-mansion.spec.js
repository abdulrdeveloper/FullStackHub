import { HaveliSecurity } from '../src/05-haveli-mansion.js';

describe('05 - Haveli Mansion: Private Fields & Encapsulation (8 pts)', () => {
  describe('Constructor and public property', () => {
    test('HaveliSecurity sets haveliName as public', () => {
      const haveli = new HaveliSecurity('Sheesh Mahal', 'raja1234', 5);
      expect(haveli.haveliName).toBe('Sheesh Mahal');
    });

    test('private fields are not directly accessible', () => {
      const haveli = new HaveliSecurity('Sheesh Mahal', 'raja1234', 5);
      expect(haveli['#passcode']).toBeUndefined();
      expect(haveli['#residents']).toBeUndefined();
      expect(haveli['#accessLog']).toBeUndefined();
    });
  });

  describe('addResident method', () => {
    test('addResident adds resident with correct passcode and valid role', () => {
      const haveli = new HaveliSecurity('Sheesh Mahal', 'raja1234', 5);
      const result = haveli.addResident('Thakur Sahab', 'malik', 'raja1234');
      expect(result).toEqual({ success: true, message: 'Thakur Sahab ab haveli ka malik hai!' });
    });

    test('addResident rejects wrong passcode', () => {
      const haveli = new HaveliSecurity('Sheesh Mahal', 'raja1234', 5);
      const result = haveli.addResident('Ramu', 'naukar', 'wrongpass');
      expect(result).toEqual({ success: false, message: 'Galat passcode!' });
    });

    test('addResident rejects invalid role', () => {
      const haveli = new HaveliSecurity('Sheesh Mahal', 'raja1234', 5);
      const result = haveli.addResident('Ramu', 'guard', 'raja1234');
      expect(result).toEqual({ success: false, message: 'Invalid role!' });
    });

    test('addResident rejects duplicate resident', () => {
      const haveli = new HaveliSecurity('Sheesh Mahal', 'raja1234', 5);
      haveli.addResident('Thakur Sahab', 'malik', 'raja1234');
      const result = haveli.addResident('Thakur Sahab', 'naukar', 'raja1234');
      expect(result).toEqual({ success: false, message: 'Already a resident!' });
    });

    test('addResident rejects when haveli is full', () => {
      const haveli = new HaveliSecurity('Sheesh Mahal', 'raja1234', 1);
      haveli.addResident('Thakur Sahab', 'malik', 'raja1234');
      const result = haveli.addResident('Ramu', 'naukar', 'raja1234');
      expect(result).toEqual({ success: false, message: 'Haveli full hai!' });
    });
  });

  describe('removeResident method', () => {
    test('removeResident removes resident with correct passcode', () => {
      const haveli = new HaveliSecurity('Sheesh Mahal', 'raja1234', 5);
      haveli.addResident('Ramu', 'naukar', 'raja1234');
      const result = haveli.removeResident('Ramu', 'raja1234');
      expect(result).toEqual({ success: true, message: 'Ramu ko haveli se nikal diya!' });
    });

    test('removeResident rejects wrong passcode', () => {
      const haveli = new HaveliSecurity('Sheesh Mahal', 'raja1234', 5);
      haveli.addResident('Ramu', 'naukar', 'raja1234');
      const result = haveli.removeResident('Ramu', 'wrongpass');
      expect(result).toEqual({ success: false, message: 'Galat passcode!' });
    });

    test('removeResident returns failure for non-existent resident', () => {
      const haveli = new HaveliSecurity('Sheesh Mahal', 'raja1234', 5);
      const result = haveli.removeResident('Ghost', 'raja1234');
      expect(result).toEqual({ success: false, message: 'Resident nahi mila!' });
    });
  });

  describe('verifyAccess method', () => {
    test('verifyAccess allows known resident', () => {
      const haveli = new HaveliSecurity('Sheesh Mahal', 'raja1234', 5);
      haveli.addResident('Thakur Sahab', 'malik', 'raja1234');
      const result = haveli.verifyAccess('Thakur Sahab');
      expect(result).toEqual({ allowed: true, message: 'Swagat hai Thakur Sahab!' });
    });

    test('verifyAccess denies unknown person', () => {
      const haveli = new HaveliSecurity('Sheesh Mahal', 'raja1234', 5);
      const result = haveli.verifyAccess('Chor');
      expect(result).toEqual({ allowed: false, message: 'Aapka entry allowed nahi hai!' });
    });

    test('verifyAccess logs each access attempt', () => {
      const haveli = new HaveliSecurity('Sheesh Mahal', 'raja1234', 5);
      haveli.addResident('Thakur Sahab', 'malik', 'raja1234');
      haveli.verifyAccess('Thakur Sahab');
      haveli.verifyAccess('Chor');
      const log = haveli.getAccessLog('raja1234');
      expect(log.length).toBe(2);
      expect(log[0].allowed).toBe(true);
      expect(log[1].allowed).toBe(false);
    });
  });

  describe('getAccessLog method', () => {
    test('getAccessLog returns copy of log with correct passcode', () => {
      const haveli = new HaveliSecurity('Sheesh Mahal', 'raja1234', 5);
      haveli.verifyAccess('Test');
      const log = haveli.getAccessLog('raja1234');
      expect(Array.isArray(log)).toBe(true);
      expect(log.length).toBe(1);
    });

    test('getAccessLog returns null for wrong passcode', () => {
      const haveli = new HaveliSecurity('Sheesh Mahal', 'raja1234', 5);
      expect(haveli.getAccessLog('wrong')).toBeNull();
    });

    test('getAccessLog returns a copy, not the original array', () => {
      const haveli = new HaveliSecurity('Sheesh Mahal', 'raja1234', 5);
      haveli.verifyAccess('Test');
      const log = haveli.getAccessLog('raja1234');
      log.push({ fake: true });
      expect(haveli.getAccessLog('raja1234').length).toBe(1);
    });
  });

  describe('changePasscode method', () => {
    test('changePasscode updates passcode successfully', () => {
      const haveli = new HaveliSecurity('Sheesh Mahal', 'raja1234', 5);
      const result = haveli.changePasscode('raja1234', 'newpass1');
      expect(result).toEqual({ success: true, message: 'Passcode badal diya!' });
      expect(haveli.getAccessLog('newpass1')).not.toBeNull();
    });

    test('changePasscode rejects wrong old passcode', () => {
      const haveli = new HaveliSecurity('Sheesh Mahal', 'raja1234', 5);
      const result = haveli.changePasscode('wrong', 'newpass1');
      expect(result).toEqual({ success: false, message: 'Purana passcode galat hai!' });
    });

    test('changePasscode rejects short new passcode', () => {
      const haveli = new HaveliSecurity('Sheesh Mahal', 'raja1234', 5);
      const result = haveli.changePasscode('raja1234', 'ab');
      expect(result).toEqual({ success: false, message: 'Naya passcode bahut chhota hai!' });
    });
  });

  describe('getResidentCount and isResident', () => {
    test('getResidentCount returns number of residents', () => {
      const haveli = new HaveliSecurity('Sheesh Mahal', 'raja1234', 5);
      expect(haveli.getResidentCount()).toBe(0);
      haveli.addResident('Thakur Sahab', 'malik', 'raja1234');
      expect(haveli.getResidentCount()).toBe(1);
    });

    test('isResident returns true for existing resident', () => {
      const haveli = new HaveliSecurity('Sheesh Mahal', 'raja1234', 5);
      haveli.addResident('Thakur Sahab', 'malik', 'raja1234');
      expect(haveli.isResident('Thakur Sahab')).toBe(true);
    });

    test('isResident returns false for non-resident', () => {
      const haveli = new HaveliSecurity('Sheesh Mahal', 'raja1234', 5);
      expect(haveli.isResident('Stranger')).toBe(false);
    });
  });
});
