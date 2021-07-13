interface Lengthy {
  length: number;
}

// Enforces `T` to have `length` property
function countAndDescription<T extends Lengthy>(element: T) {
  let descriptionText = "Got no value";
  if (element.length === 1) {
    descriptionText = "Got 1 element";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements";
  }
  return [element, descriptionText];
}

console.log(countAndDescription("Hi there!"));
