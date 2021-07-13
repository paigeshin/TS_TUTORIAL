"use strict";
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
            break;
        default:
            speed = 0;
    }
    console.log("Moving at speed: " + speed);
}
moveAnimal({ type: "horse", runningSpeed: 10 });
//# sourceMappingURL=DiscriminatedUnion.js.map