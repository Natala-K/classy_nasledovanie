import Zombie from '../Zombie';

test('should create a zombie correctly', () => {
  const char = new Zombie('Zed');
  expect(char.name).toBe('Zed');
  expect(char.type).toBe('Zombie');
  expect(char.health).toBe(100);
  expect(char.level).toBe(1);
  expect(char.attack).toBe(40);
  expect(char.defence).toBe(10);
});
