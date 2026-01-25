use file based routing

in routes file make blog directory now blog now place index.tsx under there its /blog route
also place react.tsx its /blog/react route

```plaintext
app/
└── blog/ 
    ├── index.tsx       -> URL: /blog
    └── react.tsx       -> URL: /blog/react
```

dynamic routes
$slug.tsx its /blog/:slug route

```plaintext
app/
└── blog/
    ├── index.tsx       -> URL: /blog
    ├── react.tsx       -> URL: /blog/react   
    └── $slug.tsx       -> URL: /blog/:slug

    const {slug} = Route.useParams() // to get slug value
```

---
to fetch data 
loader 
loading component
error component

```js
const data = Route.useLoaderData()
```


in global route file
we can define defaultPendingComponent and defaultErrorComponent

scroll restoration=true

--- using search params

use zod to define schema for search params


```js
<Button asChild>
  <Link to="/blog" search={{page:2}}
  activeProps={{className: "active"}}>React Blog</Link>
</Button>


 <Link to="/blog/$slug" params={{slug: "react"}}>React Blog</Link>
```

to use layout (and outlet) define same file name in route folder

```plaintext
app/
└── blog.tsx  -> URL: /blog here outlet will come , outlet is where children will be rendered
└── blog/
    ├── index.tsx       -> URL: /blog
    ├── react.tsx       -> URL: /blog/react   
    └── $slug.tsx       -> URL: /blog/:slug