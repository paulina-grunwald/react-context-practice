import React, { Component } from 'react'

// create new context
const MyContext = React.createContext({})

export const MyContextProvider = MyContext.Provider
export const MyContextConsumer = MyContext.Consumer

export class MyProvider extends Component {
  state = {
    name: 'Paulina',
    age: 30,
    hobbies: ['reading', 'music'],
    likes: 0,
  }
  render () {
    return (
      <MyContextProvider value={{
        name: this.state.name,
        age: this.state.age,
        likes: this.state.likes,
        addLike: () => this.setState({ likes: this.state.likes + 1 })

      }}>
        {this.props.children}
      </ MyContextProvider >

    )
  }
}
