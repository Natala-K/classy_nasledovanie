import Bowerman from '../Bowerman';

test('should create a bowerman correctly', () => {
  const char = new Bowerman('John');
  expect(char.name).toBe('John');
  expect(char.type).toBe('Bowman');
  expect(char.health).toBe(100);
  expect(char.level).toBe(1);
  expect(char.attack).toBe(25);
  expect(char.defence).toBe(25);
});
