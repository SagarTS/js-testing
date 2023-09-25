const sum = require('./sum');

it('should add 1 + 2 equals to 3', () => {
  const result = sum(1, 3);
  expect(result).toBe(4);
});

// describe is used to group common test blocks together.
describe('Example', () => {
  it('should add 1 + 2 equals to 3', () => {
    const result = sum(1, 3);
    expect(result).toBe(4);
  });

  it('assigns object', () => {
    const obj = {};
    expect(obj).toEqual({});
  });
});

// TRUTHINESS
describe('Boolean (truthy or falsy)', () => {
  it('checks null', () => {
    const n = null; // null || 0 || ""
    expect(n).toBeFalsy();
    expect(n).not.toBeTruthy(); // this is same as .toBeFalsy()
    expect(n).toBeNull(); // to check if it's null
    expect(n).not.toBeUndefined(); // to check if it's undefined
  });
});

// NUMBERS
describe('numbers', () => {
  it('two plus two', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3.9);
    expect(value).toBeGreaterThanOrEqual(4);
    expect(value).toBeLessThan(4.1);
    expect(value).toBeLessThanOrEqual(4);

    expect(value).toBe(4);
  });

  it('adds floating point numbers', () => {
    const value = 0.1 + 0.2;
    //expect(value).toBe(0.3);           This won't work because of rounding error
    expect(value).toBeCloseTo(0.3); // Works
    expect(value).toBeCloseTo(0.299999); // Works
  });
});

// STRINGS
// You can check strings against regular expressions with toMatch:
describe('strings', () => {
  it('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
  });
});

// ARRAYS & ITERABLES
// You can check if an array or iterable contains a particular item using toContain.
describe('arrays', () => {
  const avengers = [
    'ironman',
    'spiderman',
    'captain america',
    'witch',
    'black panther',
  ];

  it('the list has ironman in it', () => {
    expect(avengers).toContain('ironman');
  });
});

// EXCEPTIONS
// If you want to test whether a particular function throws an error when it's called, use toThrow.

function compileCode() {
  throw new Error('This throws an ERROR');
}

describe('exceptions', () => {
  it('throws error', () => {
    expect(() => compileCode()).toThrow();
    expect(() => compileCode()).toThrow('This throws an ERROR'); // to check the exact error message
  });
});
