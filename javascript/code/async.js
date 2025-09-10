
// console.log("hello")
// const as = async()=>{
//     await new Promise(resolve => {
//         setTimeout(() => {
//             console.log("inside timeout")
//             resolve();
//         }, 2000)
//     })
//     console.log("inside async")
// }
// await as();
// console.log("after")

// const someF= async()=>{
//     await new Promise(resolve =>{
//         setTimeout(()=>{
//         console.log("no await")
//         resolve();
//     },2000)
//     })
//     console.log("after timeout")
// }
// await someF(); // here if we use no await then 'after await' will run first, but with await somef will run first 
// // printing 'no await'(as its in await) then 'after timeout'.
// console.log("after await")

console.log("start");
const asyncf1 = async()=>{
    console.log("this is async func 1 first print")
}
const asyncf2 = async () => {
  console.log("this is async func 2 first print")
  await new Promise((resolve) => {
    setTimeout(() => {
      console.log("this is print 1 inside promise and using await inside async fun 2");
      resolve();
    }, 0);
  });
  const a = await  new Promise((resolve) => {
    setTimeout(() => {
      resolve(5); // Resolve Promise with the value 5
    }, 2000);
  });
  console.log(a); // Logs: 5
  console.log("this is dependent on above promise of func2");
};

asyncf1();
await asyncf2();
console.log("end")

// async fn always return a promise
// Inside async functions, you can use await to pause execution until a Promise is resolved (or rejected)

// use of try catch 
// const asyncf2 = async () => {
//   try {
//     console.log("this is async func 2 first print");
//     await new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log("this is print 1 inside promise and using await inside async fun 2");
//         resolve();
//         // If something goes wrong, call reject(error)
//       }, 1000);
//     });
//     console.log("this is dependent on above promise of func2");
//   } catch (error) {
//     console.error("Error caught in asyncf2:", error);
//   }
// };
 
// try {
//   await asyncf2();
// } catch (err) {
//   console.error("Error from asyncf2 call:", err);
// }


// An async function's promise resolves as soon as the function returns. If you don't explicitly await something or
// return a pending promise from within the async function, it will return a resolved promise immediately.