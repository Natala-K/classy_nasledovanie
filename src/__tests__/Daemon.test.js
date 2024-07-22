import Daemon from '../Daemon';

test('should create a daemon correctly', () => {
  const char = new Daemon('Azazel');
  expect(char.name).toBe('Azazel');
  expect(char.type).toBe('Daemon');
  expect(char.health).toBe(100);
  expect(char.level).toBe(1);
  expect(char.attack).toBe(10);
  expect(char.defence).toBe(40);
});
