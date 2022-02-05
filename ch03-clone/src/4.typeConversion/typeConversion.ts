let person: object = {name:'Jack', age:33};

//person.name //'object' 형식에 'name' 속성이 없습니다.

(<{name: string}>person).name; //person 변수를 일시적으로 name 속성이 있는 타입, {name:string} 타입으로 변환해 person.name 속성값 얻을 수 있음

/* 타입 단언 type assertion */


export default interface INameable{
    name: string
};

let obj: object = {name:'Jack'}

let name = (<INameable>obj).name;
let name2 = (obj as INameable).name;

console.log(name, name2) //Jack Jack