// const name ="mika",
//     age = 32,
//     gender ="male";

// const sayHi = (name:string, age:number, gender:string): void => {
//     console.log(`Hello ${name}, you are ${age}, a ${gender}`);
// };

const sayHi = (name:string, age:number, gender:string): string => {
    return `Hello ${name}, you are ${age}, a ${gender}`;
};

console.log(sayHi("Mika", 32, "male"));

export{};

