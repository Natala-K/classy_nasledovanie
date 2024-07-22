import Character from '../Character';

test('should create a character correctly', () => {
  const char = new Character('John', 'Bowman');
  expect(char.name).toBe('John');
  expect(char.type).toBe('Bowman');
  expect(char.health).toBe(100);
  expect(char.level).toBe(1);
  expect(char.attack).toBe(25);
  expect(char.defence).toBe(25);
});

test('should throw error for invalid name', () => {
  expect(() => new Character('J', 'Bowman')).toThrow('Name must be a string with length between 2 and 10 characters');
  expect(() => new Character('JohnDoeLongName', 'Bowman')).toThrow('Name must be a string with length between 2 and 10 characters');
});

test('should throw error for invalid type', () => {
  expect(() => new Character('John', 'InvalidType')).toThrow('Type must be one of the following: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
});
