// /** with interfaces **/
// interface Admin {
//   name: string;
//   privileges: string[];
// }

// interface Employee {
//   name: string;
//   startDate: Date;
// }

// //ElevatedEmployee should have `Admin's Properties` and `Employee' Properties`
// interface ElevatedEmployee extends Admin, Employee {}

// // type ElevatedEmployee = Admin & Employee;

// const e1: ElevatedEmployee = {
//   name: "Paige",
//   privileges: ["create-server"],
//   startDate: new Date(),
// };

// type Combinable = string | number;
// type Numeric = number | boolean;
