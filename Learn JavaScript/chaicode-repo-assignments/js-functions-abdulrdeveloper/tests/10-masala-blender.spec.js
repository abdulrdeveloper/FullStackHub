import { pipe, compose, grind, roast, mix, pack, createRecipe } from '../src/10-masala-blender.js';

describe('10 - Masala Spice Blender: Function Composition (9 pts)', () => {
  describe('grind', () => {
    test('adds form: "powder" to spice', () => {
      expect(grind({ name: 'Haldi' })).toEqual({ name: 'Haldi', form: 'powder' });
    });

    test('preserves existing properties', () => {
      const result = grind({ name: 'Haldi', origin: 'Kerala' });
      expect(result.origin).toBe('Kerala');
      expect(result.form).toBe('powder');
    });
  });

  describe('roast', () => {
    test('adds roasted: true and aroma: "strong" to spice', () => {
      expect(roast({ name: 'Jeera' })).toEqual({ name: 'Jeera', roasted: true, aroma: 'strong' });
    });
  });

  describe('mix', () => {
    test('adds mixed: true to spice', () => {
      expect(mix({ name: 'Mix' })).toEqual({ name: 'Mix', mixed: true });
    });
  });

  describe('pack', () => {
    test('adds packed: true and label: "name Masala" to spice', () => {
      expect(pack({ name: 'Garam' })).toEqual({ name: 'Garam', packed: true, label: 'Garam Masala' });
    });

    test('label uses spice name', () => {
      expect(pack({ name: 'Haldi' }).label).toBe('Haldi Masala');
    });
  });

  describe('pipe', () => {
    test('applies functions left to right', () => {
      const result = pipe(grind, roast)({ name: 'X' });
      expect(result.form).toBe('powder');
      expect(result.roasted).toBe(true);
    });

    test('pipe(grind, roast, pack) applies all three in order', () => {
      const result = pipe(grind, roast, pack)({ name: 'Garam' });
      expect(result).toEqual({
        name: 'Garam',
        form: 'powder',
        roasted: true,
        aroma: 'strong',
        packed: true,
        label: 'Garam Masala',
      });
    });

    test('pipe() with no functions returns identity', () => {
      const identity = pipe();
      expect(identity(42)).toBe(42);
      expect(identity('hello')).toBe('hello');
    });

    test('pipe with simple number functions: pipe(x=>x+1, x=>x*2)(3) = 8', () => {
      const result = pipe(x => x + 1, x => x * 2)(3);
      expect(result).toBe(8);
    });

    test('pipe with single function applies just that function', () => {
      const result = pipe(grind)({ name: 'Solo' });
      expect(result).toEqual({ name: 'Solo', form: 'powder' });
    });
  });

  describe('compose', () => {
    test('applies functions right to left: compose(grind, roast) roasts first then grinds', () => {
      const result = compose(grind, roast)({ name: 'X' });
      expect(result.roasted).toBe(true);
      expect(result.form).toBe('powder');
    });

    test('compose() with no functions returns identity', () => {
      const identity = compose();
      expect(identity(42)).toBe(42);
      expect(identity({ a: 1 })).toEqual({ a: 1 });
    });

    test('compose with simple number functions: compose(x=>x+1, x=>x*2)(3) = 7', () => {
      const result = compose(x => x + 1, x => x * 2)(3);
      expect(result).toBe(7);
    });

    test('compose reverses the order of pipe', () => {
      const piped = pipe(grind, roast, pack)({ name: 'Test' });
      const composed = compose(pack, roast, grind)({ name: 'Test' });
      expect(piped).toEqual(composed);
    });
  });

  describe('createRecipe', () => {
    test('creates pipeline from step names ["grind", "roast", "pack"]', () => {
      const recipe = createRecipe(['grind', 'roast', 'pack']);
      const result = recipe({ name: 'Garam' });
      expect(result.form).toBe('powder');
      expect(result.roasted).toBe(true);
      expect(result.packed).toBe(true);
      expect(result.label).toBe('Garam Masala');
    });

    test('skips unknown step names', () => {
      const recipe = createRecipe(['grind', 'blitz', 'pack']);
      const result = recipe({ name: 'Haldi' });
      expect(result.form).toBe('powder');
      expect(result.packed).toBe(true);
      expect(result.label).toBe('Haldi Masala');
      expect(result).not.toHaveProperty('blitz');
    });

    test('empty steps array returns identity function', () => {
      const recipe = createRecipe([]);
      const input = { name: 'Test' };
      expect(recipe(input)).toEqual(input);
    });

    test('non-array input returns identity function', () => {
      const recipe = createRecipe('grind');
      const input = { name: 'Test' };
      expect(recipe(input)).toEqual(input);
    });

    test('null input returns identity function', () => {
      const recipe = createRecipe(null);
      const input = { name: 'Test' };
      expect(recipe(input)).toEqual(input);
    });
  });
});
