"use strict";
// `T` extends object => T can be any object, but it should be an object
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: "Paige" }, { age: 30 });
