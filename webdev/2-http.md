
- what are http headers?
    - metadata - key-value pairs sent with requests and responses
    - used in caching,authntication, managing stat

## HTTP Methods

- basic set of operations that can be used to interact with resources on a server.

    - **GET**: Retrieve data from the server.
    - **HEAD**: Similar to GET, but only retrieves the headers without the body.
    - **OPTIONS**: Describe the communication options for the target resource.
    - **TRACE**: Perform a message loop-back test along the path to the target resource.
    - **POST**: Send data to the server to create a new resource.
    - **PUT**: Update an existing resource on the server.
    - **DELETE**: Remove a resource from the server.
    - **PATCH**: Apply partial modifications to a resource. 

## HTTP Status Codes
- **1xx**: Informational responses (e.g., 100 Continue).
- **2xx**: Successful responses (e.g., 200 OK, 201 Created).
- **3xx**: Redirection messages (e.g., 301 Moved Permanently, 302 Found).
- **4xx**: Client error responses (e.g., 400 Bad Request, 404 Not Found).
- **5xx**: Server error responses (e.g., 500 Internal Server Error, 502 Bad Gateway).
