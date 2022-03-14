const { pick, omit } = require('../../src/utils/utility');

describe('utility', () => {
  const person = {
    name: 'ucup',
    age: 23,
    role: 'admin',
  };

  describe('pick()', () => {
    test('when empty keys shold return empty object', () => {
      const result = pick(person);
      expect(result).toMatchObject({});
    });

    test('when key string should return object with this key', () => {
      const result = pick(person, 'name');
      expect(result).not.toHaveProperty('age', 'role');
    });

    test('when key array should return object with properti this keys', () => {
      const result = pick(person, ['age', 'role']);
      expect(result).not.toHaveProperty('name');
    });
  });

  describe('omit()', () => {
    test('when empty keys shold return empty object', () => {
      const result = omit(person);
      expect(result).toMatchObject({});
    });

    test('when key string should return object without this key', () => {
      const result = omit(person, 'name');
      expect(result).not.toHaveProperty('name');
    });

    test('when key array should return object without properti this keys', () => {
      const result = omit(person, ['age', 'role']);
      expect(result).not.toHaveProperty('age', 'role');
    });
  });
});
