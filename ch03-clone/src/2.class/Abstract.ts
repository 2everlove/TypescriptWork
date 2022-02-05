abstract class AbstractPerson5{
    abstract name: string;
    constructor(public age?: number){} //constructor method
}

class Person5 extends AbstractPerson5{
     constructor(public name:string, age?:number){
         super(age)
     }
}

let jack5 : Person5 = new Person5('Jack', 33);
console.log(jack5); // ts-node Abstract.ts // Person5 { age: 33, name: 'Jack' }
