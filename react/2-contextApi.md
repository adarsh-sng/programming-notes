
## Prop Drilling

- zustand,redux,react-redux,redux-toolkit. : all are state management libraries in React.

const UserContext = React.createContext();
export default UserContext;
<UserContext>  we also need a provider to wrap the component tree that needs access to the context.

