/* 클래스에 인터페이스 구현 */
interface Iperson4{
    name: string;
    age: number;
}

class Person4 implements Iperson4{
    constructor(public name:string, public age:number){}
}

let jack4: Iperson4 = new Person4('Jack',33);
console.log(jack4); //ts-node Implement.ts // Person4 { name: 'Jack', age: 33 }