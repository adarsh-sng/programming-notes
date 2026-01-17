# RFC(request for comments) 9110 and 9112 
>why http and not tcp? -> tcp guarentee that your data is inorder and complete. it doesnt tell about data format and structure
## TCP vs UDP

>TCP establishes a connection between sender and receiver with a handshake, and ensures that all the data is sent in order. UDP sends data packets without guarantees about order or delivery.

>When data is sent over a network, it is sent in packets. Each message is split into packets, the packets are sent, they arrive (potentially) out of order, and they are reassembled on the other side. And without a protocol like TCP, you can't guarantee that the order is correct

## file vs network streams
When you read from a file, you're in control of the reading process. You decide:

When to read
How much to read
When to stop reading.
You pull data from the file.

When you read from a network connection, the data is pushed to you by the remote server. You don't have control over when the data arrives, how much arrives, or when it stops arriving. Your code has to be ready to receive it when it comes.



## HTTP Message Structure

| Part | Example | Description |
|------|---------|-------------|
| start-line CRLF | `POST /users/primeagen HTTP/1.1` | The request or status line |
| *( field-line CRLF ) | `Host: google.com` | Zero or more HTTP header lines (key-value pairs) |
| CRLF | | Blank line separating headers from body |
| [ message-body ] | `{"name": "TheHTTPagen"}` | Optional message body |


## `cURL` is a command line tool for making HTTP requests.