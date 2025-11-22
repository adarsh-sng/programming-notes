
## Prop Drilling

- zustand,redux,react-redux,redux-toolkit. : all are state management libraries in React.

const UserContext = React.createContext();
export default UserContext;
<UserContext>  we also need a provider to wrap the component tree that needs access to the context.

step 1 create a context
step 2 provide
step 3 consume

```js
import { createContext, useState } from "react";

export const CounterContext = createContext(null);

export const CounterProvider=(props)=>{
  const [count,setCount]=useState(0)
  return(
    <CounterContext.Provider value={{count, username: "adarsh", setCount}}>
      {props.children}
    </CounterContext.Provider>
  )
}
```