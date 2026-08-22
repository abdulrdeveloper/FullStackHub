import { getWeatherAdvice } from '../src/04-weather-advice.js';

describe('04 - TrailBuddy: Weather Advisory (8 pts)', () => {

  describe('Extreme heat', () => {
    test('40°C (any condition) → too hot', () => {
      expect(getWeatherAdvice(40, false)).toBe('Too hot for hiking - stay indoors and hydrate');
    });

    test('35°C and raining → still too hot (heat takes priority)', () => {
      expect(getWeatherAdvice(35, true)).toBe('Too hot for hiking - stay indoors and hydrate');
    });
  });

  describe('Warm weather (25–34°C)', () => {
    test('28°C, not raining → great weather', () => {
      expect(getWeatherAdvice(28, false)).toBe('Great weather for hiking - don\'t forget sunscreen');
    });

    test('25°C, raining → warm but rainy', () => {
      expect(getWeatherAdvice(25, true)).toBe('Warm but rainy - consider indoor activities');
    });

    test('30°C, not raining → great weather', () => {
      expect(getWeatherAdvice(30, false)).toBe('Great weather for hiking - don\'t forget sunscreen');
    });
  });

  describe('Mild weather (15–24°C)', () => {
    test('20°C, not raining → perfect hiking weather', () => {
      expect(getWeatherAdvice(20, false)).toBe('Perfect hiking weather - enjoy the trails');
    });

    test('18°C, raining → cool and rainy', () => {
      expect(getWeatherAdvice(18, true)).toBe('Cool and rainy - bring waterproof gear if hiking');
    });

    test('15°C, not raining → perfect hiking weather', () => {
      expect(getWeatherAdvice(15, false)).toBe('Perfect hiking weather - enjoy the trails');
    });
  });

  describe('Cool weather (5–14°C)', () => {
    test('10°C, not raining → chilly', () => {
      expect(getWeatherAdvice(10, false)).toBe('Chilly - wear layers for your hike');
    });

    test('7°C, raining → cold and wet', () => {
      expect(getWeatherAdvice(7, true)).toBe('Cold and wet - best to stay indoors');
    });

    test('5°C, not raining → chilly', () => {
      expect(getWeatherAdvice(5, false)).toBe('Chilly - wear layers for your hike');
    });
  });

  describe('Cold weather (below 5°C)', () => {
    test('3°C → too cold', () => {
      expect(getWeatherAdvice(3, false)).toBe('Too cold - stay warm indoors');
    });

    test('-5°C → too cold', () => {
      expect(getWeatherAdvice(-5, true)).toBe('Too cold - stay warm indoors');
    });

    test('0°C → too cold', () => {
      expect(getWeatherAdvice(0, false)).toBe('Too cold - stay warm indoors');
    });
  });
});
