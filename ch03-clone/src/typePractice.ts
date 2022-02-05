let n: number = 1
let b: boolean = true
let s: string = 'hello'
let o: object = {}

//n = 'a' //'string' 형식은 'number' 형식에 할당할 수 없습니다.
//b= 1 //'number' 형식은 'boolean' 형식에 할당할 수 없습니다.
//s= false //'boolean' 형식은 'string' 형식에 할당할 수 없습니다.
o = {name: 'Jack', age:33}

let a: any = 0
a = 'hello'
a = true
a = {}

let u: undefined = undefined
//u = 1 //'1' 형식은 'undefined' 형식에 할당할 수 없습니다.

let count = 10, message = 'Your count'
let result = `${message} is ${count}`
console.log(result); //ts-node typePractice.ts //Your count is 10