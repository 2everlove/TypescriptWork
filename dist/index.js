"use strict";
// const name ="mika",
//     age = 32,
//     gender ="male";
Object.defineProperty(exports, "__esModule", { value: true });
const person = {
    name: "mika",
    age: 22,
    gender: "male"
};
const sayHi = (person) => {
    return `Hello ${person.name}, you are ${person.age}, a ${person.gender}`;
};
console.log(sayHi(person));
//# sourceMappingURL=index.js.map