import{IPerson, ICompany} from './Export'

let jack : IPerson = {name: 'Jack', age:33},
    jane : IPerson = {name: 'Jane', age:32}

let apple : ICompany = {name: 'Apple Computer, Inc', age: 43},
    ms: ICompany = {name: 'Microsoft', age: 44}

console.log(jack) //{ name: 'Jack', age: 33 }
console.log(jane) //{ name: 'Jane', age: 32 }
console.log(apple) //{ name: 'Apple Computer, Inc', age: 43 }
console.log(ms) //{ name: 'Microsoft', age: 44 }

/* 비구조화 할당 destructuring */
let {name, age} = jack;
console.log(name, age); //Jack 33

/* 잔여 연산자 (rest operator) or 전개 연산자 (spread operator) */
let address: any ={
    country: 'Korea',
    city: 'Seoul',
    address1: 'Gangnam-gu',
    address2: 'Sinsa-dong 123-456',
    address3: '789 street, 2 Floor ABC building'
}

const{country, city, ...detail} = address;
console.log(detail);
/* 
{
  address1: 'Gangnam-gu',
  address2: 'Sinsa-dong 123-456',
  address3: '789 street, 2 Floor ABC building'
}
*/

let coord = {...{x:0}, ...{y:0}}
console.log(coord) //{ x: 0, y: 0 }

let part1 = {name:'jane'}, part2 = {age:22}, part3= {city:'Seoul', country:'Kr'};
let merged = {...part1, ...part2, ...part3}
console.log(merged) //{ name: 'jane', age: 22, city: 'Seoul', country: 'Kr' }
