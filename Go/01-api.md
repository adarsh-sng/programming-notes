```go
router:=http.NewServeMux()
router.HandleFunc("GET /hello",func(w http.ResponseWriter,r *http.Request){
  w.Write([]byte("Hello World"))
  fmt.Fprintln(w,"Hello World")
}) 
if err:=http.ListenAndServe(":8080",router);err!=nil{
  log.Fatal(err)
}
```

//context package in go
```go
type Context interface {
  Deadline() (deadline time.Time, ok bool)
  Done() <-chan struct{}
  Err() error
  Value(key any) any
}
```

```go
server:=http.Server{
  Addr: ":8080",
  //Handler:router,
  Handler:middleware.Logging(router),
  ReadTimeout: 5*time.Second,
  WriteTimeout: 10*time.Second,
  IdleTimeout: 120*time.Second,
}
func Logging(next http.Handler) http.Handler {
  return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
    log.Printf("%s %s", r.Method, r.URL.Path)
    next.ServeHTTP(w, r)
  })
}
```