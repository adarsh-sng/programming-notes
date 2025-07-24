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

// object can't be iterated in  for of loop 
```