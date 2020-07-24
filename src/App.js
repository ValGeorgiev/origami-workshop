import React, { Component } from 'react'
import UserContext from './Context'

function getCookie(name) {
  const cookieValue = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return cookieValue ? cookieValue[2] : null;
}
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loggedIn: null,
      user: null
    }
  }

  logIn = (user) => {
    this.setState({
      loggedIn: true,
      user
    })
  }

  logOut = () => {
    document.cookie = "x-auth-token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
    this.setState({
      loggedIn: false,
      user: null
    })
  }

  componentDidMount() {
    const token = getCookie('x-auth-token')

    if(!token) {
      this.logOut()
      return
    }

    fetch('http://localhost:9999/api/user/verify', {
      method: 'POST',
      body: JSON.stringify({
        token
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(promise => {
      console.log(promise)
      return promise.json()
    }).then(response => {
      if(response.status) {
        this.logIn({
          username: response.user.username,
          id: response.user._id
        })
      } else {
        this.logOut()
      }
    })
  }

  render() {
    const {
      loggedIn,
      user
    } = this.state

    if (loggedIn === null) {
      return (<div>Loading...</div>)
    }

    return (
      <UserContext.Provider value={{
        loggedIn,
        user,
        logIn: this.logIn,
        logOut: this.logOut
      }}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}

export default App