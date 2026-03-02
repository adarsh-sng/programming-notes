window.alert()?
The `window.alert()` method displays an alert dialog with the specified message and an OK button. It is a simple way to show information to the user. When the alert dialog is displayed, the user must click the OK button to close it and continue interacting with the page.

window.confirm()?
The `window.confirm()` method displays a dialog box with a specified message, along with an OK and a Cancel button. It returns `true` if the user clicks OK, and `false` if the user clicks Cancel. This method is often used to ask the user for confirmation before performing an action.
```javascript
if (window.confirm("Are you sure you want to delete this item?")) {
  // User clicked OK, proceed with deletion
} else {
  // User clicked Cancel, do not delete
}
``` 

window.prompt()?
The `window.prompt()` method displays a dialog box that prompts the user for input. It takes a message as an argument and returns the text entered by the user, or `null` if the user clicks Cancel. This method is useful for getting input from the user.
```javascriptvar userName = window.prompt("Please enter your name:");
if (userName !== null) {
  // User entered a name, do something with it
  console.log("Hello, " + userName + "!");    
} else {
  // User clicked Cancel, handle accordingly
  console.log("User cancelled the prompt.");
}```

navigator object?The `navigator` object contains information about the browser and the user's environment. It provides properties and methods that allow you to access details such as the browser's user agent, platform, language, and more. Some common properties of the `navigator` object include:
- `navigator.userAgent`: Returns the user agent string for the browser, which contains information about the browser and operating system.
- `navigator.platform`: Returns a string representing the platform on which the browser is running (e.g., "Windows", "MacIntel").
- `navigator.language`: Returns the preferred language of the user, typically in the form of a language code (e.g., "en-US").
- `navigator.onLine`: Returns a boolean indicating whether the browser is online or offline.
- `navigator.geolocation`: Provides access to the user's geographical location, allowing you to get the user's current position or watch for changes in their location.
```javascriptif (navigator.onLine) {
  console.log("You are online!");
} else {  console.log("You are offline.");
}```
The `navigator` object is a powerful tool for gathering information about the user's environment and can be used to enhance the user experience by tailoring content and functionality based on the user's browser and location.  

history object?The `history` object allows you to manipulate the browser's session history. It provides methods to navigate through the history of visited pages, as well as properties to access information about the history. Some common methods and properties of the `history` object include:
- `history.back()`: Navigates to the previous page in the history.
- `history.forward()`: Navigates to the next page in the history.
- `history.go(n)`: Navigates to a specific page in the history, where `n` is an integer representing the number of pages to move (positive for forward, negative for backward).
- `history.length`: Returns the number of entries in the history stack.
```javascript// Go back to the previous page
history.back(); 
