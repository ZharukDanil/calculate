const { add, subtract, multiply, divide } = require('../src/calc');

test('Додавання чисел', () => {
  expect(add(2, 3)).toBe(5);
});

test('Віднімання чисел', () => {
  expect(subtract(10, 4)).toBe(6);
});

test('Множення чисел', () => {
  expect(multiply(3, 4)).toBe(12);
});

test('Комбіноване обчислення: (2 + 3) * 4', () => {
  const sum = add(2, 3);
  const result = multiply(sum, 4);
  expect(result).toBe(20);
});

test('Ділення на нуль викликає помилку', () => {
  expect(() => divide(10, 0)).toThrow('Division by zero');
});

