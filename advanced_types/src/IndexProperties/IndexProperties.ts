/** Situation **/
// I don't know how many properties I need
// I don't know what to assign as a name
interface ErrorContainer {
  // { email: 'Not a valid email', username: 'Must start with a character'
  [prop: string]: string;
  //   id: string;
}

const errorBag: ErrorContainer = {
  email: "Not a valid email!",
};
