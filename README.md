# React Context Notes 

### General Information
- It's recommend reaching for Context when you find yourself passing props down through three or more levels in your component tree.
- Context is designed to share data that can be considered “global” for a tree of React components e.g theme, prefered language.
 - React context helps to avoid ``props drilling``(geting the state from the top of your react tree to the bottom and you end up passing props through components that do not necessarily need them.)
 - With React’s Context API you are able to use multiple Providers and Consumers using different context instances. This could be useful if you want to separate different data models into distinct parts of your app. 
- __Rule of thumb__: if you start to feel irritated by how long it takes to determine where data is coming from, introduce Context.
- Context should be used only for the data, which will be used at various levels in the React component tree.
- React allows us to create multiple contexts in one app
- ``React.createContext`` is used to initialise the Context and it’s passed the initial value. It returns an object with a Provider and a Consumer
- The Provider provides the ability to share state changes throughout our React Tree. It accepts a ``value`` prop and the data in this prop is available to all the child ``consumers``.
- The Consumer allows us to subscribe to these state changes anywhere in the tree.
- 

__Important__:
We should not heavily use Context for everything. Take time, think and design properly and if you see a few sets of data have been passed to many levels down the tree and it is going to be very hard to manage, then take a call and use Context.

### Usage cases of React Contex
1. Themes
2. managing multiple languages in an app
3. Authentification


To create context:

```javacript
const { Provider, Consumer } = React.createContext("defaultValue");
```
React.createContext accepts an optional defaultValue argument, and returns two components: Provider and Consumer.

The Provider component accepts a special prop called value, which can be any arbitrary piece of data: a string, array, object, etc[. If no value prop is provided, the defaultValue argument is used instead.

# Resources:
- [React Context documentation](https://reactjs.org/docs/context.html)
- [Heres how React's New Context API Works by Wes Bos](https://www.youtube.com/watch?v=XLJN4JfniH4)
- [Learn the React Context API with a Practical Example You Can Bring to Your Apps](https://itnext.io/understanding-the-react-context-api-through-building-a-shared-snackbar-for-in-app-notifications-6c199446b80c)
- [React: Understanding the Context](https://seesparkbox.com/foundry/react_context_api_state_management)
- [Five Ways to Advanced React Patterns](https://medium.com/yazanaabed/advanced-react-patterns-7326f5a5ad1b)
- [Why you should consider the new Context API in React? — A deep dive](https://blog.bitsrc.io/why-you-should-consider-the-new-context-api-in-react-a-deep-dive-d588b66c57b5)
- [How (and when) to use React’s new Context API](https://blog.logrocket.com/how-and-when-to-use-reacts-new-context-api-b584e41b2704)
- [https://hackernoon.com/how-to-get-started-with-the-react-context-api-ccc41728fa59](How to get started with the React Context API)