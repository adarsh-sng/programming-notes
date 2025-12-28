// const sleep =(ms)=>{
//     // return new Promise(res=>setTimeout(()=>{res()},ms))
//     return setTimeout(()=>{console.log("hello")},ms)
// }

// console.log(79)
// await sleep(3000)
// console.log(79)

// In a browser environment, setTimeout returns a numeric ID. In Node.js, it returns a Timeout object. In both cases,
//   this value is used so you can cancel the timer later with clearTimeout(returnValue).

// const myObject = {
//   property: 'Value!',
//   otherProperty: 77,
//   "obnoxious property": function() {
//     console.log("hello")
//   }
// };
// // myObject["obnoxious property"]()
// console.table(myObject)
// console.log(Array.prototype);
// console.log(Array.prototype.constructor);
// console.log(Object.getPrototypeOf(Array));

let a = { hello: 2 };
a.job = 3;
console.log(a.__proto__);
class jo {
  lol = "lol";
}
a = new jo();
