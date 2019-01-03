import React, { Component } from 'react'
import { MyContextConsumer } from './MyContext'
class Person extends Component {
  render () {
    return (
      <div className='person'>
        <MyContextConsumer>
          {(context) => (
            <React.Fragment>
              <p> I am a consumer {context.name}</p>
              <p>My age is: {context.age}</p>
              <p>My likes: {context.likes}</p>
              <button onClick={context.addLike}>Give like</button>
            </React.Fragment>
          )}
        </MyContextConsumer>
      </div >
    )
  }
}

export default Person
