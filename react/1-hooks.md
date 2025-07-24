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
