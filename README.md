# React Context Notes 

- It's recommend reaching for Context when you find yourself passing props down through three or more levels in your component tree.
 - helps you avoid props drilling
 - With React’s Context API you are able to use multiple Providers and Consumers using different context instances. This could be useful if you want to separate different data models into distinct parts of your app. 
- __Rule of thumb__: if you start to feel irritated by how long it takes to determine where data is coming from, introduce Context.
- The Provider provides the ability for us to share state changes throughout our React Tree. 
- The Consumer allows us to subscribe to these state changes anywhere in the tree.


****
# Resources:
- [React Context documentation](https://reactjs.org/docs/context.html)
- [Heres how React's New Context API Works by Wes Bos](https://www.youtube.com/watch?v=XLJN4JfniH4)
- [Learn the React Context API with a Practical Example You Can Bring to Your Apps](https://itnext.io/understanding-the-react-context-api-through-building-a-shared-snackbar-for-in-app-notifications-6c199446b80c)