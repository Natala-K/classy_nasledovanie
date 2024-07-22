import Swordsman from '../Swordsman';

test('should create a swordsman correctly', () => {
  const char = new Swordsman('Alex');
  expect(char.name).toBe('Alex');
  expect(char.type).toBe('Swordsman');
  expect(char.health).toBe(100);
  expect(char.level).toBe(1);
  expect(char.attack).toBe(40);
  expect(char.defence).toBe(10);
});
