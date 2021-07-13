// One way to cast
// const userInputElement = <HTMLInputElement>document.getElementById("user-input")!
// userInputElement.value = "Hi there!";

// Second way to cast
const userInputElement = document.getElementById(
  "user-input"
)! as HTMLInputElement;
userInputElement.value = "Hi There!";
