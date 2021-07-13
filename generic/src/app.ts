const ages: number[] = [];
const names: Array<String> = [];

const anyPromise: Promise<any> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("hello world");
  }, 2000);
});

const stringPromise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is done");
  }, 2000);
});

anyPromise.then((data) => {
  const array: Array<String> = data.split(" ");
  console.log(array.toString());
});
