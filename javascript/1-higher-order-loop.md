## ForEach, Map, Filter, Reduce
```js
const lol =["yo","yoo","yooo","yoooo"];
// lol.forEach((val,index,arr)=>{console.log(val,index,arr)})
// forEach returns nothing
const forEachnums =[]
const myNums =[1,2,3,4,5,6,7,8,9,10];
myNums.forEach((num)=>{
    if(num>4){
        forEachnums.push(num)
    }
})
const newNums=myNums.filter((nums)=> nums>4)

console.log(newNums)
console.log(forEachnums)
// ---------------------------------------------------------------------
const lessgo =myNums.map((num)=>num+1)
console.log(lessgo)
//----------------------------------------------------------------------
//reduce
const myTotal =myNums.reduce((acc,curr)=>acc+curr,0)
console.log(myTotal)

```

## For In Loop
```js
const myObjyo={
    hello:"yoyo",
    skibidi:"toilet",
    lessgo:"yy"
}
//for in loop.
// for (const key in myObjyo) {
//    console.log(`key is ${key} value is ${myObjyo[key]}`)
// }

// arr =["array","key","start","from",0]
// for (const key in arr) {
//     console.log(key)
// }

// for of -->map it also gives key and value
// for in -->object it only gives key 
// map is not iterable
```

## For Of Loop
```js
// for of
// const arr = [1, 2, 3, 4, 5];
// for(const i of arr){
//     console.log(i);
// }

// const greetings="hello world!";
// for(const greet of greetings){
//     if(greet!=" "){
//     console.log(`each letter is ${greet}`);}
// }

const map =new Map();
map.set("IN","INDIA")
map.set("IN","INDIA")
// console.log(map);

// for(const [key,value]of map){
//     console.log(`${key}==>${value}`)
// }

```
// object can't be iterated in  for of loop 
The for...of loop specifically looks for a special method called [Symbol.iterator] on the item you give it. Arrays have it. Strings have it. Plain objects do not have it.
1. The Error
If you try for (let x of obj), JS basically checks:
"Does obj have a Symbol.iterator function?" -> No. -> Throw TypeError: obj is not iterable.​
2. Why don't they have it? (The "Why")
It's by design. Objects are unordered collections of keys. "Iterating" implies a specific sequence (first, second, third). Since objects traditionally didn't guarantee order (until recently with ES6 keys), there is no single "correct" way to iterate them:
Should it iterate keys?
Should it iterate values?
Should it include hidden prototype properties?
Because there's no single right answer, JS leaves it undefined rather than guessing wrong.​


---
| Method    | Mutates? | Return type    | Typical use                  | Needs callback?        |
| --------- | -------- | -------------- | ---------------------------- | ---------------------- |
| forEach   | No       | undefined      | Side effects / logging       | Yes mdn2.netlify​      |
| map       | No       | New array      | Transform elements           | Yes developer.mozilla​ |
| filter    | No       | New array      | Keep some elements           | Yes openjavascript​    |
| reduce    | No       | Single value   | Sum, aggregate, build object | Yes geeksforgeeks​     |
| find      | No       | Single element | First match                  | Yes w3schools​         |
| findIndex | No       | Number (index) | Index of first match         | Yes w3schools​         |
| some      | No       | Boolean        | “Any element matches?”       | Yes w3schools​         |
| every     | No       | Boolean        | “All elements match?”        | Yes w3schools​         |
| sort      | Yes      | Same array     | Reorder elements             | Yes/No openjavascript​ |
| flat      | No       | New array      | Flatten nesting              | No w3schools​          |
| flatMap   | No       | New array      | Map then flatten             | Yes w3schools​         |