># React Hooks: useEffect
```javascript
    useEffect(()=>{
        //This hook runs after the component mounts
        //and after every update
        console.log("Count is: ", counter);
        //You can perform side effects here, like fetching data or updating the DOM
        //Cleanup function can be returned to run before the component unmounts
        return () => {
            console.log("Cleanup for count: ", counter);
        };
    },[counter])// dependencies array, if empty it runs only once after mount, otherwise runs when dependencies change
```
by default it runs after every render.

## useCallback 
In functional React components, every time the component re-renders, any functions defined inside it are recreated from scratch. This means they are assigned a completely new memory address.

If you pass one of these newly created functions as a prop to a child component, the child will see a "new" prop and re-render itself—even if the actual data hasn't changed. useCallback solves this by preserving the original function instance across renders, only recreating it if specific dependencies change.