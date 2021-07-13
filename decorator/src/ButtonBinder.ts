function Autobind(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  const adjustedDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFunction = originalMethod.bind(this);
      return boundFunction;
    },
  };
  return adjustedDescriptor;
}

class Printer {
  message = "This works!";

  @Autobind
  showMessage() {
    console.log(this.message);
  }
}

const printer = new Printer();
const button = document.querySelector("button");

/*** Before applying `Autobind` ***/
// button?.addEventListener("this", printer.showMessage); // returns undefined... because `this` refers to button event..
// button?.addEventListener("this", printer.showMessage.bind(printer)); // this works

/*** After appyling `Autobind` ***/
button?.addEventListener("this", printer.showMessage); // this works
