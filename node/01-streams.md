strems -> event + buffer + state machines

Streams are a powerful abstraction in Node.js that allow you to work with data in a continuous flow. They are built on top of events, buffers, and state machines, enabling efficient handling of large amounts of data without loading everything into memory at once.

### Types of Streams
There are four main types of streams in Node.js:
1. **Readable Streams**: These streams allow you to read data from a source. Examples include file streams, HTTP request streams, and process.stdin.
2. **Writable Streams**: These streams allow you to write data to a destination. Examples
include file streams, HTTP response streams, and process.stdout.
3. **Duplex Streams**: These streams are both readable and writable. Examples include TCP sockets and zlib streams.
4. **Transform Streams**: These are duplex streams that can modify the data as it is read or written. Examples include compression and encryption streams.

```js
fs.createReadStream('file.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('file.txt.gz'));
```
## TCP Streams
TCP streams are a type of duplex stream that allow for two-way communication over a networkx. They are commonly used for building network applications, such as web servers and chat applications.

first tcp packets comes to NIC -> OS kernel -> libuv(event get emitted?) -> node Buffer object( the raw buffer are cpp memory array of fixed length) -> js heap -> user code.  //verify this flow

TCP stack -> handles packet ordering, retransmission, flow control, etc.



