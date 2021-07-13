// // Type Guard - 1, using if statement
// type Combinable = string | number;
// type Numeric = number | boolean;
// type Universal = Combinable & Numeric;

// function add(a: Combinable, b: Combinable) {
//   if (typeof a === "string" || typeof b === "string") {
//     return a.toString() + b.toString();
//   }
//   return a + b;
// }

// // Type Guard - 2, using `in` keyword
// interface Admin {
//   name: string;
//   privileges: string[];
// }

// interface Employee {
//   name: string;
//   startDate: Date;
// }

// type ElevatedEmployee = Admin & Employee;

// const e1: ElevatedEmployee = {
//   name: "Paige",
//   privileges: ["create-server"],
//   startDate: new Date(),
// };

// type UnknownEmployee = Employee | Admin;

// function printEmployeeInformation(emp: UnknownEmployee) {
//   console.log("Name: " + emp.name);
//   if ("privileges" in emp) {
//     console.log("Privileges: " + emp.privileges);
//   }
//   if ("startDate" in emp) {
//     console.log("Start Date" + emp.startDate);
//   }
// }

// printEmployeeInformation(e1);

// // Type Guard - 3, using `instanceof` keyword
// class Car {
//   drive() {
//     console.log("Driving");
//   }
// }

// class Truck {
//   drive() {
//     console.log("Driving a truck...");
//   }
//   loadCargo(amount: number) {
//     console.log("Loading Cargo...." + amount);
//   }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//   if (vehicle instanceof Truck) {
//     vehicle.loadCargo(500);
//   }
//   if (vehicle instanceof Car) {
//     vehicle.drive();
//   }
// }
