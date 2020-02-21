const adder = require('./adder');

describe('adder', () => {
  it('should add two numbers', () => {
    expect(adder(1, 2)).toBe(3);
  });

  it('should return a sole imput', () => {
    expect(adder(5)).toBe(5);
  });

  it('should add three numbers', () => {
    expect(adder(1, 2, 3)).toBe(6);
  });

  it('should return 0 if no numbers are passed', () => {
    expect(adder()).toBe(0);
  });

  it('should add any number of arguments', () => {
    expect(adder(1, 2, 3, 4, 5, 6)).toBe(21);
  });
});

/*
8:04 / 10:33
https://www.youtube.com/watch?v=SbKPgaRZsxA
An Introduction to Test-Driven Development in JavaScript
Aug 25, 2019  TypeofNaN Tutorials

182  npm i -D jest
183  jest

$ npm run test
 PASS  ./adder.test.js
  adder
    √ should add two numbers (2ms)
    √ should return a sole imput
    √ should add three numbers
    √ should return 0 if no numbers are passed (1ms)
    √ should add any number of arguments

Test Suites: 1 passed, 1 total
Tests:       5 passed, 5 total
Snapshots:   0 total
Time:        1.45s
Ran all test suites.

$
*/

/*
not use array.reduce
$ npm run test
 FAIL  ./adder.test.js
  adder
    √ should add two numbers (2ms)
    √ should return a sole imput (1ms)
    √ should add three numbers
    √ should return 0 if no numbers are passed
    × should add any number of arguments (2ms)

  ● adder › should add any number of arguments

    expect(received).toBe(expected) // Object.is equality

    Expected: 21
    Received: 6

      19 | 
      20 |   it("should add any number of arguments", ()=> {
    > 21 |     expect(adder(1,2,3,4,5,6)).toBe(21);
         |                                ^
      22 |   });
      23 | });
      24 |

      at Object.it (adder.test.js:21:32)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 4 passed, 5 total
Snapshots:   0 total
Time:        1.515s
Ran all test suites.

$
*/
