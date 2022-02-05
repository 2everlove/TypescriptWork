/* 클래스 선언 */
class Person1{
    name: string;
    age?: number;
}

let jack1: Person1 = new Person1();
jack1.name = 'Jack';
jack1.age = 33;
console.log(jack1); //ts-node Person.ts //Person1 { name: 'Jack', age: 33 }

/* 접근 제한자 public, private, proteect */

/* Constructor */
class Person2 {
    constructor(public name: string, public age?: number){}
}

let jack2: Person2 = new Person2('Jack', 33);
console.log(jack2); //ts-node Person.ts //Person2 { name: 'Jack', age: 33 }

class Person3{
    name: string;
    age: number;
    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }
}

let jack3 : Person3 = new Person3('Jack', 33);
console.log(jack3); //ts-node Person.ts //Person3 { name: 'Jack', age: 33 }