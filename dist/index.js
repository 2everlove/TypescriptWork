"use strict";
// const name ="mika",
//     age = 32,
//     gender ="male";
Object.defineProperty(exports, "__esModule", { value: true });
// const sayHi = (name:string, age:number, gender:string): void => {
//     console.log(`Hello ${name}, you are ${age}, a ${gender}`);
// };
// interface Human {
//     name:string,
//     age:number,
//     gender:string
// }
class Human {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    static getAge(age) {
        return age;
    }
}
// const person = {
//     name : "mika",
//     age : 22,
//     gender : "male"
// };
const ahn = new Human("mika", 32, "male");
const sayHi = (person) => {
    return `Hello ${person.name}, you are ${Human.getAge(32)}, a ${person.gender}`;
};
// console.log(sayHi(person));
console.log(sayHi(ahn));
//# sourceMappingURL=index.js.map