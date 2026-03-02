use nested layout to share UI across multiple routes.

```plaintext
app/
├── layout.js           -> root layout for all routes
├── page.js             -> homepage at /
├── about/    
│   ├── layout.js       -> layout specific to /about and its sub-routes
│   └── page.js         -> about page at /about
└── dashboard/
    ├── layout.js       -> layout specific to /dashboard and its sub-routes
    └── page.js         -> dashboard homepage at /dashboard
``` 
### Route Groups `(group)`  
Organise routes or apply scoped layouts without affecting the path.

```plaintext
app/
├── (marketing)/
│   ├── layout.js       -> layout specific to marketing pages
│  
│   └── page.js     -> URL remains /
└── (shop)/
    ├── layout.js       -> layout specific to shop pages
    └── cart/
        └── page.js     -> URL remains /cart
```
