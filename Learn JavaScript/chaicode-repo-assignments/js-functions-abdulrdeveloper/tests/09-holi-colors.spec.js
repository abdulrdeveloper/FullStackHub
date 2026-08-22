import { mixColors, adjustBrightness, addToPalette, removeFromPalette, mergePalettes } from '../src/09-holi-colors.js';

describe('09 - Holi Color Mixer: Pure Functions (9 pts)', () => {
  const red = () => ({ name: 'red', r: 255, g: 0, b: 0 });
  const blue = () => ({ name: 'blue', r: 0, g: 0, b: 255 });
  const green = () => ({ name: 'green', r: 0, g: 255, b: 0 });
  const gray = () => ({ name: 'gray', r: 100, g: 100, b: 100 });

  describe('mixColors', () => {
    test('mixes red and blue to produce { name: "red-blue", r: 128, g: 0, b: 128 }', () => {
      const result = mixColors(red(), blue());
      expect(result).toEqual({ name: 'red-blue', r: 128, g: 0, b: 128 });
    });

    test('mixes red and green correctly', () => {
      const result = mixColors(red(), green());
      expect(result).toEqual({ name: 'red-green', r: 128, g: 128, b: 0 });
    });

    test('does NOT mutate original color1 or color2', () => {
      const c1 = red();
      const c2 = blue();
      const c1Copy = { ...c1 };
      const c2Copy = { ...c2 };
      mixColors(c1, c2);
      expect(c1).toEqual(c1Copy);
      expect(c2).toEqual(c2Copy);
    });

    test('returns null when either input is null', () => {
      expect(mixColors(null, blue())).toBeNull();
      expect(mixColors(red(), null)).toBeNull();
      expect(mixColors(null, null)).toBeNull();
    });

    test('returns null when either input is undefined', () => {
      expect(mixColors(undefined, blue())).toBeNull();
      expect(mixColors(red(), undefined)).toBeNull();
    });
  });

  describe('adjustBrightness', () => {
    test('doubles brightness: {r:100,g:100,b:100} factor 2 => {r:200,g:200,b:200}', () => {
      const result = adjustBrightness(gray(), 2);
      expect(result.r).toBe(200);
      expect(result.g).toBe(200);
      expect(result.b).toBe(200);
    });

    test('clamps at 255: {r:200,...} factor 2 => r capped at 255', () => {
      const bright = { name: 'bright', r: 200, g: 200, b: 200 };
      const result = adjustBrightness(bright, 2);
      expect(result.r).toBe(255);
      expect(result.g).toBe(255);
      expect(result.b).toBe(255);
    });

    test('clamps at 0: factor 0 makes all zeros', () => {
      const result = adjustBrightness(red(), 0);
      expect(result.r).toBe(0);
      expect(result.g).toBe(0);
      expect(result.b).toBe(0);
    });

    test('does NOT mutate the original color', () => {
      const original = gray();
      const originalCopy = { ...original };
      adjustBrightness(original, 2);
      expect(original).toEqual(originalCopy);
    });

    test('preserves name after adjustment', () => {
      const result = adjustBrightness(gray(), 1.5);
      expect(result.name).toBe('gray');
    });

    test('returns null when color is null or factor is not a number', () => {
      expect(adjustBrightness(null, 2)).toBeNull();
      expect(adjustBrightness(gray(), 'bright')).toBeNull();
    });
  });

  describe('addToPalette', () => {
    test('adds color to end of a new array', () => {
      const palette = [red()];
      const result = addToPalette(palette, blue());
      expect(result).toHaveLength(2);
      expect(result[1].name).toBe('blue');
    });

    test('does NOT mutate the original palette array', () => {
      const palette = [red()];
      const originalLength = palette.length;
      addToPalette(palette, blue());
      expect(palette).toHaveLength(originalLength);
    });

    test('returns [color] when palette is not an array', () => {
      const b = blue();
      expect(addToPalette('not-array', b)).toEqual([b]);
      expect(addToPalette(null, b)).toEqual([b]);
    });

    test('returns copy of palette when color is null/invalid', () => {
      const palette = [red(), green()];
      const result = addToPalette(palette, null);
      expect(result).toEqual(palette);
      expect(result).not.toBe(palette);
    });
  });

  describe('removeFromPalette', () => {
    test('removes color by name and returns new array', () => {
      const palette = [red(), green(), blue()];
      const result = removeFromPalette(palette, 'green');
      expect(result).toHaveLength(2);
      expect(result.find(c => c.name === 'green')).toBeUndefined();
    });

    test('does NOT mutate the original palette', () => {
      const palette = [red(), green(), blue()];
      const originalLength = palette.length;
      removeFromPalette(palette, 'green');
      expect(palette).toHaveLength(originalLength);
    });

    test('returns copy when name is not found', () => {
      const palette = [red(), blue()];
      const result = removeFromPalette(palette, 'yellow');
      expect(result).toEqual(palette);
      expect(result).not.toBe(palette);
    });

    test('returns [] when palette is not an array', () => {
      expect(removeFromPalette('not-array', 'red')).toEqual([]);
      expect(removeFromPalette(null, 'red')).toEqual([]);
    });
  });

  describe('mergePalettes', () => {
    test('merges two palettes with no duplicate names', () => {
      const p1 = [red(), green()];
      const p2 = [blue(), red()]; // red is duplicate
      const result = mergePalettes(p1, p2);
      expect(result).toHaveLength(3);
      const names = result.map(c => c.name);
      expect(names).toEqual(['red', 'green', 'blue']);
    });

    test('does NOT mutate either original palette', () => {
      const p1 = [red()];
      const p2 = [blue()];
      const p1Len = p1.length;
      const p2Len = p2.length;
      mergePalettes(p1, p2);
      expect(p1).toHaveLength(p1Len);
      expect(p2).toHaveLength(p2Len);
    });

    test('treats non-array input as empty array', () => {
      const p1 = [red(), green()];
      const result = mergePalettes(p1, null);
      expect(result).toHaveLength(2);
    });

    test('both non-array inputs returns empty array', () => {
      expect(mergePalettes(null, undefined)).toEqual([]);
    });
  });
});
