## type alias

## readonly
type User = {
  `readonly` _id: string
  name: string
  email: string
  isActive: boolean
}

## never 

## void

## array
- let myNumbers: number[] = [1, 2, 3]
- const myNumbers2: Array<number> = [1, 2, 3]

type User2 = {
  name: string
  age: number
}
- let users: User2[] = []

## union 
- let score: number | string = 33

## tuple
- let user: [number, string] = [1, 'adarsh']

## enum
enum Size {
  Small = 's',
  Medium = 'm',
  Large = 'l',
} 
let mySize: Size = Size.Medium
console.log(mySize) // 'm'

> enum vs const enum
- enum: values are real objects that exist at runtime
- const enum: completely removed during compilation

## interface
``` js
interface User3 {
  name: string
  age: number
}
```
let user3: User3 = { name: 'adarsh', age: 22 }
> extend interface
interface User4 extends User3 {
  role: string
}
> also reopenable
interface User4 {
  isActive: boolean
}
let user4: User4 = { name: 'adarsh', age: 22, role: 'admin', isActive: true }

