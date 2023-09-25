let numbers = ['one', 'two', 'three', 'four'];

// Runs just once before the start of the test
beforeAll(() => {
  numbers = ['one', 'two', 'three', 'four'];
});

// Runs just once after the end of all the test
afterAll(() => {
  numbers = ['one', 'two', 'three', 'four'];
});

// use this
// Runs before every test
// beforeEach(() => {                        // **** this applies to all the tests even if it is not related to numbers array,
//   console.log('BEFORE EACH');
//   numbers = ['one', 'two', 'three', 'four'];
// });

// Runs before every test
afterEach(() => {
  numbers = ['one', 'two', 'three', 'four'];
});

describe('numbers array', () => {
  // use this
  beforeEach(() => {
    //  **** this runs only for these test cases inside the describe block
    console.log('BEFORE EACH');
    numbers = ['one', 'two', 'three', 'four'];
  });

  it('should add number to end of array', () => {
    // numbers = ['one', 'two', 'three', 'four'];    rather than this in every test ^
    numbers.push('five');
    expect(numbers[numbers.length - 1]).toBe('five');
  });

  it('should add number to beginning of array', () => {
    // numbers = ['one', 'two', 'three', 'four'];    rather than this in every test ^
    numbers.unshift('zero');
    expect(numbers[0]).toBe('zero');
  });

  it('it should have initial length of 4', () => {
    // numbers = ['one', 'two', 'three', 'four'];    rather than this in every test ^
    expect(numbers.length).toBe(4);
  });
});

describe('Testing something else that has nothing to do with numbers array', () => {
  it('true should be truthy', () => {
    expect(true).toBeTruthy();
  });
});

// Expected flow for 2 tests cases

// BEFORE ALL

// BEFORE EACH
// AFTER EACH
// BEFORE EACH
// AFTER EACH

//AFTER ALL
