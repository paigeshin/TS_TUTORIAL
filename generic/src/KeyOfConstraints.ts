function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}

// extractAndConvert({ name: "Max" }, "age"); //Error because `age` is not the key of first parameter's object
extractAndConvert({ name: "Max" }, "name");
