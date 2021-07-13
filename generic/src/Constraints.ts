// `T` extends object => T can be any object, but it should be an object
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "Paige" }, { age: 30 });
