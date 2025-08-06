> questions?
what is tagname?

# DOM (Document Object Model)
`document` is the root of the DOM tree and represents the entire HTML document. It provides methods and properties to access and manipulate the content of the page.
Here are some common methods and properties of the `document` object:
`document.title`: Gets or sets the title of the document.
`doucment.body`: Represents the `<body>` element of the document.
`document.body.children`: Returns a live HTMLCollection of the child elements of the `<body>` element.
`document.getElementById(id)`: Returns the element with the specified `id`.
`document.getElementsByClassName(className)`: Returns a live HTMLCollection of elements with the specified class name.
`document.getElementsByTagName(tagName)`: Returns a live HTMLCollection of elements with the specified tag name.
`document.querySelector(selector)`: Returns the first element that matches the specified CSS selector.
`document.querySelectorAll(selector)`: Returns a static NodeList of elements that match the specified CSS selector.

---
`document.createElement(tagName)`: Creates a new element with the specified tag name.
`document.createTextNode(text)`: Creates a new text node with the specified text.
`document.appendChild(node)`: Appends a node as the last child of the document.
`document.removeChild(node)`: Removes a child node from the document.

--- 

> NodeList vs HTMLCollection:?
NodeList is a collection of nodes that can be returned by methods like `querySelectorAll()`. It is static, meaning it does not automatically update when the document changes. HTMLCollection, on the other hand, is a live collection that updates automatically when the document changes, such as when elements are added or removed.

---
`document.getElementByClassName(classname).length`: Returns the number of elements with the specified class name.
`document.getElementsByTagName(tagName).length`: Returns the number of elements with the specified tag name.
`document.querySelectorAll(selector).length`: Returns the number of elements that match the specified CSS selector.

---
`document.getElementByClassName(classname).textContent`: Returns the text content of the first element with the specified class name.
`document.getElementsByTagName(tagName)[0].textContent`: Returns the text content of the first element with the specified tag name.
`document.querySelector(selector).textContent`: Returns the text content of the first element that matches the specified CSS selector.

---

### Editing the DOM
`document.title = "My Page"`: Sets the title of the document to "My Page".
`document.getElementById("p1-name").textContent = "Sofia"`: Sets the text content of the element with id "p1-name" to "Sofia".
`document.getElementById("p1-name").append(" & friends")`: Appends the text " & friends" to the text content of the element with id "p1-name".

----
## Events and handlers
Events are actions or occurrences that happen in the browser, such as a user clicking a button, typing in a text field, or the page loading. Event handlers are functions that are executed in response to these events.
```javascript
document.addEventListener("eventType",(eventObject)=>{})
```
js passes an event object to the event handler function, which contains information about the event, such as the target element, the type of event, and any additional data associated with the event.
if we access the event object in the handler function, we can use it to get information about the event and perform actions based on that information.