"use strict";
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
var __metadata =
  (this && this.__metadata) ||
  function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
var __param =
  (this && this.__param) ||
  function (paramIndex, decorator) {
    return function (target, key) {
      decorator(target, key, paramIndex);
    };
  };
function ClassLoggerNoParams(constructor) {
  console.log(constructor);
}
function withTemplate(output, selectorId) {
  return function (constructor) {
    const hookElement = document.getElementById(selectorId);
    const useful = new constructor();
    if (hookElement) {
      hookElement.innerHTML = output;
      hookElement.querySelector("h1").textContent = useful.name;
    }
  };
}
function ClassLoggerWithParams(logString) {
  return function (constructor) {};
}
function PropertyLogging(target, propertyName) {}
function PropertyLoggingWithParameters(target, name, descriptor) {}
function PropertyMethodLogging(target, name, descriptor) {}
function MethodParameterDecorator(target, name, position) {
  console.log("Method Decorator");
  console.log(target);
  console.log(name);
  console.log(position);
}
let Product = class Product {
  constructor(t, p) {
    this.title = t;
    this._price = p;
  }
  set price(value) {
    if (value > 0) {
      this._price = value;
    } else {
      throw new Error("Invalid price - should be positive!");
    }
  }
  getPriceWithTax(tax) {
    return this.price * (1 + tax);
  }
};
__decorate(
  [PropertyLogging, __metadata("design:type", String)],
  Product.prototype,
  "title",
  void 0
);
__decorate(
  [
    PropertyLoggingWithParameters,
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number]),
  ],
  Product.prototype,
  "price",
  null
);
__decorate(
  [
    PropertyMethodLogging,
    __param(0, MethodParameterDecorator),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0),
  ],
  Product.prototype,
  "getPriceWithTax",
  null
);
Product = __decorate(
  [
    ClassLoggerWithParams("Logging"),
    withTemplate("<h1>Welcome to page</h1>", "Main"),
    ClassLoggerNoParams,
    __metadata("design:paramtypes", [String, Number]),
  ],
  Product
);
//# sourceMappingURL=Decorators.js.map
