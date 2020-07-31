import React from 'react'

const UserContext = React.createContext({
  user: null,
  logIn: () => {},
  logOut: () => {}
})

export default UserContext

