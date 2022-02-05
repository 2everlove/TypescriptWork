function add(a:number, b:number) : number{
    return a+b
}
let result = add(12,10)
console.log(result) //22

function printMe(name:string, age:number):void{
    console.log(`name: ${name}, age: ${age}`)
}
printMe('jack', 33) //name: jack, age: 33

/* 함수 시그니처 function signature */
let printMeSig: (string, number) => void = function(name:string, age:number): void{}
//printMeSig() //2개의 인수가 필요한데 0개를 가져왔습니다.

/* type 키워드로 타입 별칭 alias 만들기 */
type stringNumberFunc = (string, number) => void
let f: stringNumberFunc = function(a: string, b: number): void{};
let g: stringNumberFunc = function(c: string, d: number): void{};
let h: stringNumberFunc = function(){}
//h() //2개의 인수가 필요한데 0개를 가져왔습니다.

/* undefined */
interface INameable{
    name: string;
}
function getName(o: INameable) {
    return o != undefined ? o.name : 'unknown name'
}
let n = getName(undefined)
console.log(n) //unknown name
console.log(getName({name:'Jack'})) //Jack

interface IAgeable{
    age?: number;
}
function getAge(o: IAgeable){
    return o != undefined && o.age ? o.age : 0
}
console.log(getAge(undefined)) //0
console.log(getAge(null)) //0
console.log(getAge({age: 33})) //33

/* 선택적 매개변수 optional parameter */
function fn(arg1:string, arg?:number) {console.log(`arg: ${arg}`)}
fn('hello', 1) //arg: 1
fn('hello') //arg: undefined

type OptionalArgFunc = (string, number?) => void //선택적 매개변수가 있는 함수의 시그니처