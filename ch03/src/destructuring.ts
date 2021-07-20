import {IPerson} from './IPerson_ICompany'

let jack: IPerson = {name: 'Jack', age: 32}
let {name, age} = jack;
console.log(name, age);

/*
$ ts-node destructuring
if don't execute the command, npm i -g ts-node
*/