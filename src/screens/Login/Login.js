import React, { useState } from 'react'

import { Column, Input, Button, Text } from 'src/components'
import { useUser } from 'src/context'

const Login = () => {
  const { login } = useUser()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <Column flex={1} justifyContent='center' p={40}>
      <Text>Login screen</Text>
      <Input my={10} value={username} onChangeText={setUsername} />
      <Input my={10} value={password} onChangeText={setPassword} secureTextEntry />
      <Button text='entrar' onPress={() => login({ username, password })} />
    </Column>
  )
}

export default Login
