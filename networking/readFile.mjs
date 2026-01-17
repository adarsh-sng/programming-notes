// import fs from "node:fs/promises";
import fs from "fs";

// async function readFile8(filePath) {
//   let data = await fs.readFile(filePath);
//   let num = 0;
//   let eof = false;
//   while (!eof) {
//     process.stdout.write("read: ");
//     let byte = data.slice(num, num + 8);
//     process.stdout.write(byte.toString());
//     process.stdout.write("\n");
//     num += 8;
//     if (byte.length < 8) {
//       eof = true;
//     }
//   }
// }
// const readFileArray = async (filePath) => {
//   const data = await fs.readFile(filePath,"utf8");
//   const arr = data.split('\n');
//   arr.forEach((line)=>{console.log(`Read: ${line}`)})
// };

let readFile8 = async function (filePath) {
  const rs = fs.createReadStream(filePath, { highWaterMark: 8 });
  rs.on("data", (chunk) => {
    process.stdout.write("read: ");
    process.stdout.write(chunk);
    process.stdout.write("\n");
  });
  rs.on("error", console.error);
};

const readFile = async (filePath) => {
  let b = 1;
  const rs = fs.createReadStream(filePath, { highWaterMark: 8 });
  rs.on("data", (chunk) => {
    process.stdout.write(chunk)
    // process.stdout.write('\n')
  });
};

try {
  readFile("message.txt");
  // console.log(data);
} catch (err) {
  console.error(err);
}
