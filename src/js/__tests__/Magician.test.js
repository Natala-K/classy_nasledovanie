import Magician from '../Magician';

test('should create a magician correctly', () => {
  const char = new Magician('Merlin');
  expect(char.name).toBe('Merlin');
  expect(char.type).toBe('Magician');
  expect(char.health).toBe(100);
  expect(char.level).toBe(1);
  expect(char.attack).toBe(10);
  expect(char.defence).toBe(40);
});
