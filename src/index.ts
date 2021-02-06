// const name ="mika",
//     age = 32,
//     gender ="male";

// const sayHi = (name:string, age:number, gender:string): void => {
//     console.log(`Hello ${name}, you are ${age}, a ${gender}`);
// };

// interface Human {
//     name:string,
//     age:number,
//     gender:string
// }

class Human{
    static getAge(age) {
        return age;
    }
    public name: string;
    private age: number;
    public gender: string;
    constructor(name: string, age: number, gender?: string){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

// const person = {
//     name : "mika",
//     age : 22,
//     gender : "male"
// };

const ahn = new Human("mika", 32, "male");

const sayHi = (person: Human): string => {
    return `Hello ${person.name}, you are ${Human.getAge(32)}, a ${person.gender}`;
};

// console.log(sayHi(person));
console.log(sayHi(ahn));

export{};

