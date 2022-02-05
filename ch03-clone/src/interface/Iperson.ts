interface Iperson {
    name: string
    age: number
}

let good: Iperson = {name: 'Jack', age: 33}

//let bad1: Iperson = {name: 'Jack'} //'age' 속성이 '{ name: string; }' 형식에 없지만 'Iperson' 형식에서 필수입니다.
//let bad2: Iperson = {age: 33} //'name' 속성이 '{ age: number; }' 형식에 없지만 'Iperson' 형식에서 필수입니다.
//let bad3: Iperson = {} //'{}' 형식에 'Iperson' 형식의 name, age 속성이 없습니다.
//let bad4: Iperson = {name: 'Jack', age: 33, etc: true} //'{ name: string; age: number; etc: boolean; }' 형식은 'Iperson' 형식에 할당할 수 없습니다. 개체 리터럴은 알려진 속성만 지정할 수 있으며 'Iperson' 형식에 'etc'이(가) 없습니다.