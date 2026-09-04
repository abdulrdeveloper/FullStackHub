import { createElection, createVoteValidator, countVotesInRegions, tallyPure } from '../src/12-panchayat-election.js';

describe('12 - Panchayat Election System: Capstone (9 pts)', () => {
  const candidates = [
    { id: 'C1', name: 'Sarpanch Ram', party: 'Janata' },
    { id: 'C2', name: 'Pradhan Sita', party: 'Lok' },
    { id: 'C3', name: 'Mukhiya Gita', party: 'Samaj' },
  ];

  describe('createElection', () => {
    let election;

    beforeEach(() => {
      election = createElection(candidates);
    });

    describe('registerVoter', () => {
      test('registers a valid voter and returns true', () => {
        expect(election.registerVoter({ id: 'V1', name: 'Mohan', age: 25 })).toBe(true);
      });

      test('returns false for voter under 18', () => {
        expect(election.registerVoter({ id: 'V2', name: 'Chhotu', age: 17 })).toBe(false);
      });

      test('returns false for duplicate voter id', () => {
        election.registerVoter({ id: 'V1', name: 'Mohan', age: 25 });
        expect(election.registerVoter({ id: 'V1', name: 'Mohan Again', age: 30 })).toBe(false);
      });

      test('returns false for invalid voter object', () => {
        expect(election.registerVoter(null)).toBe(false);
        expect(election.registerVoter(undefined)).toBe(false);
        expect(election.registerVoter({})).toBe(false);
      });
    });

    describe('castVote', () => {
      test('calls onSuccess callback for valid vote', () => {
        election.registerVoter({ id: 'V1', name: 'Mohan', age: 25 });
        const result = election.castVote(
          'V1', 'C1',
          (info) => `voted for ${info.candidateId}`,
          (err) => `error: ${err}`
        );
        expect(result).toBe('voted for C1');
      });

      test('calls onError for unregistered voter', () => {
        const result = election.castVote(
          'V999', 'C1',
          () => 'success',
          (err) => err
        );
        expect(typeof result).toBe('string');
        expect(result).not.toBe('success');
      });

      test('calls onError for invalid candidate', () => {
        election.registerVoter({ id: 'V1', name: 'Mohan', age: 25 });
        const result = election.castVote(
          'V1', 'C999',
          () => 'success',
          (err) => err
        );
        expect(typeof result).toBe('string');
        expect(result).not.toBe('success');
      });

      test('calls onError for double voting', () => {
        election.registerVoter({ id: 'V1', name: 'Mohan', age: 25 });
        election.castVote('V1', 'C1', () => 'ok', () => 'err');
        const result = election.castVote(
          'V1', 'C2',
          () => 'success',
          (err) => err
        );
        expect(typeof result).toBe('string');
        expect(result).not.toBe('success');
      });

      test('returns the callback return value', () => {
        election.registerVoter({ id: 'V1', name: 'Mohan', age: 25 });
        const result = election.castVote('V1', 'C1', () => 42, () => -1);
        expect(result).toBe(42);
      });
    });

    describe('getResults', () => {
      test('returns array with vote counts', () => {
        election.registerVoter({ id: 'V1', name: 'Mohan', age: 25 });
        election.registerVoter({ id: 'V2', name: 'Sohan', age: 30 });
        election.castVote('V1', 'C1', () => {}, () => {});
        election.castVote('V2', 'C1', () => {}, () => {});

        const results = election.getResults();
        const c1 = results.find(r => r.id === 'C1');
        expect(c1.votes).toBe(2);
      });

      test('sorts by custom sortFn when provided', () => {
        election.registerVoter({ id: 'V1', name: 'Mohan', age: 25 });
        election.registerVoter({ id: 'V2', name: 'Sohan', age: 30 });
        election.castVote('V1', 'C1', () => {}, () => {});
        election.castVote('V2', 'C2', () => {}, () => {});

        const results = election.getResults((a, b) => a.name.localeCompare(b.name));
        expect(results[0].name).toBe('Mukhiya Gita');
      });

      test('default sort is by votes descending', () => {
        election.registerVoter({ id: 'V1', name: 'A', age: 20 });
        election.registerVoter({ id: 'V2', name: 'B', age: 20 });
        election.registerVoter({ id: 'V3', name: 'C', age: 20 });
        election.castVote('V1', 'C2', () => {}, () => {});
        election.castVote('V2', 'C2', () => {}, () => {});
        election.castVote('V3', 'C1', () => {}, () => {});

        const results = election.getResults();
        expect(results[0].id).toBe('C2');
        expect(results[0].votes).toBe(2);
      });
    });

    describe('getWinner', () => {
      test('returns candidate with most votes', () => {
        election.registerVoter({ id: 'V1', name: 'A', age: 20 });
        election.registerVoter({ id: 'V2', name: 'B', age: 20 });
        election.castVote('V1', 'C1', () => {}, () => {});
        election.castVote('V2', 'C1', () => {}, () => {});

        const winner = election.getWinner();
        expect(winner.id).toBe('C1');
        expect(winner.name).toBe('Sarpanch Ram');
      });

      test('returns null if no votes cast', () => {
        expect(election.getWinner()).toBeNull();
      });
    });
  });

  describe('createVoteValidator', () => {
    test('returns a function', () => {
      const validate = createVoteValidator({ minAge: 18, requiredFields: ['id', 'name', 'age'] });
      expect(typeof validate).toBe('function');
    });

    test('validates a valid voter returns { valid: true }', () => {
      const validate = createVoteValidator({ minAge: 18, requiredFields: ['id', 'name', 'age'] });
      const result = validate({ id: 'V1', name: 'Mohan', age: 25 });
      expect(result.valid).toBe(true);
    });

    test('rejects voter under minAge', () => {
      const validate = createVoteValidator({ minAge: 18, requiredFields: ['id', 'name', 'age'] });
      const result = validate({ id: 'V1', name: 'Chhotu', age: 16 });
      expect(result.valid).toBe(false);
      expect(result.reason).toBeDefined();
    });

    test('rejects voter missing required fields', () => {
      const validate = createVoteValidator({ minAge: 18, requiredFields: ['id', 'name', 'age'] });
      const result = validate({ id: 'V1', name: 'NoAge' });
      expect(result.valid).toBe(false);
      expect(result.reason).toBeDefined();
    });
  });

  describe('countVotesInRegions', () => {
    test('counts votes in flat region', () => {
      const region = { name: 'District', votes: 100, subRegions: [] };
      expect(countVotesInRegions(region)).toBe(100);
    });

    test('counts votes with one level of subRegions', () => {
      const region = {
        name: 'District',
        votes: 100,
        subRegions: [
          { name: 'Block1', votes: 50, subRegions: [] },
          { name: 'Block2', votes: 30, subRegions: [] },
        ],
      };
      expect(countVotesInRegions(region)).toBe(180);
    });

    test('counts votes in deeply nested regions', () => {
      const region = {
        name: 'State',
        votes: 10,
        subRegions: [
          {
            name: 'District1',
            votes: 20,
            subRegions: [
              { name: 'Block1', votes: 30, subRegions: [] },
            ],
          },
        ],
      };
      expect(countVotesInRegions(region)).toBe(60);
    });

    test('returns 0 for null input', () => {
      expect(countVotesInRegions(null)).toBe(0);
    });

    test('returns 0 for undefined input', () => {
      expect(countVotesInRegions(undefined)).toBe(0);
    });
  });

  describe('tallyPure', () => {
    test('returns NEW object (original unchanged)', () => {
      const tally = { C1: 5, C2: 3 };
      const tallyCopy = { ...tally };
      const result = tallyPure(tally, 'C1');
      expect(tally).toEqual(tallyCopy);
      expect(result).not.toBe(tally);
    });

    test('increments existing candidate count', () => {
      const tally = { C1: 5, C2: 3 };
      const result = tallyPure(tally, 'C1');
      expect(result.C1).toBe(6);
      expect(result.C2).toBe(3);
    });

    test('adds new candidate with count 1', () => {
      const tally = { C1: 5 };
      const result = tallyPure(tally, 'C3');
      expect(result.C3).toBe(1);
      expect(result.C1).toBe(5);
    });

    test('works with empty tally', () => {
      const result = tallyPure({}, 'C1');
      expect(result).toEqual({ C1: 1 });
    });
  });
});
