## 4-sep-2025
ORM - basically oops for databases
compose middleware?

middleware in handler?

app.use(middleware); -- will run middleware for all incoming requests
app.use('/path', middleware); -- will run middleware only for requests to /path
middleware -> function(req, res, next) {
  // middleware logic
  next();
}

----
## 22 dec 2025
npm link 
