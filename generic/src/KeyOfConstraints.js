"use strict";
function extractAndConvert(obj, key) {
    return obj[key];
}
// extractAndConvert({ name: "Max" }, "age"); //Error because `age` is not the key of first parameter's object
extractAndConvert({ name: "Max" }, "name");
