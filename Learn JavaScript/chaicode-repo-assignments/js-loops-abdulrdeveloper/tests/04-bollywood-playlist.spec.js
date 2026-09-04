import { buildPlaylist } from '../src/04-bollywood-playlist.js';

describe('04 - Simran ki Road Trip Playlist (8 pts)', () => {

  describe('Basic playlist building', () => {
    test('All songs fit within limit', () => {
      expect(buildPlaylist([100, 200, 150], 500)).toEqual({
        count: 3, totalDuration: 450
      });
    });

    test('Stops when next song would exceed limit', () => {
      expect(buildPlaylist([240, 180, 300, 200], 600)).toEqual({
        count: 2, totalDuration: 420
      });
    });

    test('First song itself exceeds limit', () => {
      expect(buildPlaylist([500, 200, 100], 300)).toEqual({
        count: 0, totalDuration: 0
      });
    });

    test('Exactly fills the limit', () => {
      expect(buildPlaylist([200, 300], 500)).toEqual({
        count: 2, totalDuration: 500
      });
    });

    test('Single song that fits', () => {
      expect(buildPlaylist([100], 200)).toEqual({
        count: 1, totalDuration: 100
      });
    });
  });

  describe('Skipping invalid durations', () => {
    test('Skips negative duration songs', () => {
      expect(buildPlaylist([100, -50, 200], 400)).toEqual({
        count: 2, totalDuration: 300
      });
    });

    test('Skips zero duration songs', () => {
      expect(buildPlaylist([100, 0, 200], 400)).toEqual({
        count: 2, totalDuration: 300
      });
    });

    test('Skips string values in songs array', () => {
      expect(buildPlaylist([100, "song", 200], 400)).toEqual({
        count: 2, totalDuration: 300
      });
    });

    test('All invalid songs', () => {
      expect(buildPlaylist([-10, 0, "abc"], 500)).toEqual({
        count: 0, totalDuration: 0
      });
    });

    test('Skip invalid, then stop at limit', () => {
      expect(buildPlaylist([100, -50, 200, 150], 350)).toEqual({
        count: 2, totalDuration: 300
      });
    });
  });

  describe('Validation', () => {
    test('Non-array songs returns zeroed object', () => {
      expect(buildPlaylist("songs", 300)).toEqual({
        count: 0, totalDuration: 0
      });
    });

    test('null songs returns zeroed object', () => {
      expect(buildPlaylist(null, 300)).toEqual({
        count: 0, totalDuration: 0
      });
    });

    test('Negative maxDuration returns zeroed object', () => {
      expect(buildPlaylist([100, 200], -100)).toEqual({
        count: 0, totalDuration: 0
      });
    });

    test('Zero maxDuration returns zeroed object', () => {
      expect(buildPlaylist([100, 200], 0)).toEqual({
        count: 0, totalDuration: 0
      });
    });

    test('Non-number maxDuration returns zeroed object', () => {
      expect(buildPlaylist([100, 200], "long")).toEqual({
        count: 0, totalDuration: 0
      });
    });
  });
});
