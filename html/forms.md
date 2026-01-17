```html
<form></form>
```
every element inside the `<form>` tags is part of the form.and will be submitted together when the form is submitted.

two type of form elements:
1. GET- values are appended to the URL as query parameters.
2. POST- data goes encrypted in the body of the request.

action attribute- URL where the form data is sent when submitted.

```html
<form action="url" method="GET or POST" accept-charset="UTF-8" autocomplete="on or off" enctype="application/x-www-form-urlencoded or multipart/form-data or text/plain" name="form-name" target="_self or _blank or _parent or _top">
  <!-- form elements like input, select, textarea, button etc. -->
</form>
```

```html
<form>
  <label for="username">Name:</label>. <!-- good practice to use label for accessibility -->
  <input type="text" placeholder="Enter your name" name="username" id="username" /> 
</form>
```
button 
```html
<form>
  <label for="username">Name:</label>. <!-- good practice to use label for accessibility -->
  <input type="text" placeholder="Enter your name" name="username" id="username" /> 
  <button type="submit">Submit</button> <!-- submit button -->
</form>
```
