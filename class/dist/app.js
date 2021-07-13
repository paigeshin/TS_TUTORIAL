"use strict";
class Person {
    constructor(name) {
        if (name) {
            this.name = name;
            console.log(`${name} is initialized`);
        }
    }
}
new Person("hello");
//# sourceMappingURL=app.js.map