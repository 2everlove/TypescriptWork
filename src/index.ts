// const name ="mika",
//     age = 32,
//     gender ="male";

// const sayHi = (name:string, age:number, gender:string): void => {
//     console.log(`Hello ${name}, you are ${age}, a ${gender}`);
// };

interface Human {
    name:string,
    age:number,
    gender:string
}

const person = {
    name : "mika",
    age : 22,
    gender : "male"
};

const sayHi = (person: Human): string => {
    return `Hello ${person.name}, you are ${person.age}, a ${person.gender}`;
};

console.log(sayHi(person));

export{};

