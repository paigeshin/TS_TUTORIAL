class SingleTonClass {
  private static instance: SingleTonClass;

  private constructor(private name: string, private address: string) {
    console.log(`${this.name}, ${this.address}`);
  }

  static getInstance(): SingleTonClass {
    if (SingleTonClass.instance) {
      return this.instance;
    }
    this.instance = new SingleTonClass("hello", "world");
    return this.instance;
  }

  printUser() {
    console.log(`${this.name}, ${this.address} has been created`);
  }
}

const singleton = SingleTonClass.getInstance();
const singleton2 = SingleTonClass.getInstance();

if (singleton == singleton2) {
  console.log("I'm the same instance!!!");
  singleton.printUser();
  singleton2.printUser();
}
