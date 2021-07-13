function ClassLoggerNoParams(constructor: Function) {
  console.log(constructor);
}

//with template
function withTemplate(output: string, selectorId: string) {
  return function (constructor: any) {
    const hookElement = document.getElementById(selectorId);
    const useful = new constructor();
    if (hookElement) {
      hookElement.innerHTML = output;
      hookElement.querySelector("h1")!.textContent = useful.name;
    }
  };
}

function withTemplateAdvanced(output: string, selectorId: string) {
  return function (originalConstructor: any) {
    const hookElement = document.getElementById(selectorId);
    const useful = new originalConstructor();
    if (hookElement) {
      hookElement.innerHTML = output;
      hookElement.querySelector("h1")!.textContent = useful.name;
    }
    //Returning new anonymous class
    return class extends originalConstructor {
      //add new functionality here
      constructor() {
        super();
      }
    };
  };
}

function withTemplateAdvancedAdvanced(output: string, selectorId: string) {
  return function <T extends { new (..._: any[]): { name: string } }>(
    originalConstructor: any
  ) {
    //Returning new anonymous class
    return class extends originalConstructor {
      //add new functionality here
      constructor() {
        super();
        const hookElement = document.getElementById(selectorId);
        if (hookElement) {
          hookElement.innerHTML = output;
          hookElement.querySelector("h1")!.textContent = this.name;
        }
      }
    };
  };
}

function ClassLoggerWithParams(logString: string) {
  return function (constructor: Function) {};
}

function PropertyLogging(target: any, propertyName: string | symbol) {}

// For getter and setter
function PropertyLoggingWithParameters(
  target: any,
  name: string,
  descriptor: PropertyDescriptor
) {}

function PropertyMethodLogging(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {}

function MethodParameterDecorator(
  target: any,
  name: string | Symbol,
  position: number
) {
  console.log("Method Decorator");
  console.log(target);
  console.log(name);
  console.log(position);
}

@ClassLoggerWithParams("Logging")
@withTemplate("<h1>Welcome to page</h1>", "Main")
@ClassLoggerNoParams
class Product {
  @PropertyLogging
  title: string;
  private _price: number;

  @PropertyLoggingWithParameters
  set price(value: number) {
    if (value > 0) {
      this._price = value;
    } else {
      throw new Error("Invalid price - should be positive!");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @PropertyMethodLogging
  getPriceWithTax(@MethodParameterDecorator tax: number) {
    return this.price * (1 + tax);
  }
}
