const { sum, multiply, divide, subtract } = require('./index');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('multiplies 2 * 2 to equal 4', () => {
  expect(multiply(2, 2)).toBe(4);
});

test('divides 4 / 2 to equal 2', () => {
    expect(divide(4, 2)).toBe(2);
});

test('subtracts 4 - 2 to equal 2', () => {
    expect(subtract(4, 2)).toBe(2);
});
