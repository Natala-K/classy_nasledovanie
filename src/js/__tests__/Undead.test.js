import Undead from '../Undead';

test('should create an undead correctly', () => {
  const char = new Undead('Drake');
  expect(char.name).toBe('Drake');
  expect(char.type).toBe('Undead');
  expect(char.health).toBe(100);
  expect(char.level).toBe(1);
  expect(char.attack).toBe(25);
  expect(char.defence).toBe(25);
});
