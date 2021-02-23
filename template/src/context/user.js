import React, { useState, useEffect, useContext } from 'react'

import { getMe, loginUser } from 'src/services'
import { getToken, setToken, clearToken } from 'src/utils'

const UserContext = React.createContext()

function UserProvider(props) {
  const [isFetchingUser, setIsFetchingUser] = useState(true)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      const token = await getToken()
      try {
        if (token) {
          const userResponse = await getMe()
          setUser(userResponse)
        }
      } catch (error) {
        console.log('error', error)
      } finally {
        setIsFetchingUser(false)
      }
    }

    fetchUser()
  }, [])

  const login = async credentials => {
    try {
      const loginResponse = await loginUser(credentials)
      setToken(loginResponse.token)
      setUser(loginResponse)
    } catch (error) {
      console.log('error', error)
    }
  }

  const logout = () => {
    clearToken()
    setUser(null)
  }

  return <UserContext.Provider value={{ user, setUser, isFetchingUser, login, logout }} {...props} />
}

const useUser = () => useContext(UserContext)

export { UserProvider, useUser }
