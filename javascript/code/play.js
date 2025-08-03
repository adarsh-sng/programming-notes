const sleep =(ms)=>{
    return new Promise(res=>setTimeout(()=>{res()},ms))
}

console.log(79)
await sleep(3000)
console.log(79)