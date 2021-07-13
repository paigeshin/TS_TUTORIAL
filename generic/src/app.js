"use strict";
const ages = [];
const names = [];
const anyPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("hello world");
    }, 2000);
});
const stringPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("This is done");
    }, 2000);
});
anyPromise.then((data) => {
    const array = data.split(" ");
    console.log(array.toString());
});
