/**
 * interface witt class
 */

interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

class Character implements CharacterInterface {
  // only use public properties in interface
  // if we want to use private or protected properties, need to define in class separately
  constructor(
    public name: string,
    public moveSpeed: number,
    private health: number
  ) {
    this.name = name;
    this.moveSpeed = moveSpeed;
    this.health = health;
  }
  move() {
    console.log(`${this.name} is moving at speed ${this.moveSpeed}`);
  }
}
