"use strict";
// //Generic Not Applied
// function merge(objA: object, objB: object) {
//   return Object.assign(objA, objB);
// }
// const mergedObj = merge({ name: "paige" }, { age: 30 }) as {
//   name: string;
//   age: number;
// };
// console.log(mergedObj.age);
// // Generic Applied
// function genericMerge<T, U>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }
// const genericMergedObj = genericMerge<{ name: string }, { age: number }>(
//   { name: "paige" },
//   { age: 30 }
// );
// console.log(genericMergedObj.name);
// // Not specified Generif
// const advancedMrege = merge({ name: "Max", hobbies: ["Sports"] }, { age: 30 });
