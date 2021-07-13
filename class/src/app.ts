/** You can't assign value **/

interface Star {
  readonly name?: string; // Optional, but it doesn't force.
}

interface Singer extends Star {
  song: string;
}

class Person implements Star {
  name?: string;

  constructor(name?: string) {
    if (name) {
      this.name = name;
      console.log(`${name} is initialized`);
    }
  }
}

new Person();
