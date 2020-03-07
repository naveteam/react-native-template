import React from 'react'
import { UserProvider } from './user'

const AppProviders = ({ children }) => {
  return <UserProvider>{children}</UserProvider>
}

export default AppProviders
