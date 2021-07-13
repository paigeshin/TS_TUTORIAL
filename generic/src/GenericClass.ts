class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];
  constructor(data: T[]) {
    this.data = data;
    console.log(data);
  }
  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItem() {
    return [...this.data];
  }
}

const textStorage: DataStorage<string> = new DataStorage<string>(["1", "2"]);

const numberStorage: DataStorage<number> = new DataStorage<number>([1, 2]);
