import React, { useState } from 'react'
import { Text } from 'react-native'

import { Column, Button } from 'src/components'
import { useUser } from 'src/context'

const HomeScreen = ({ navigation }) => {
  const { logout } = useUser()
  return (
    <Column flex={1} justifyContent='center' p={40}>
      <Text>Home!</Text>
      <Button text='go to profile' onPress={() => navigation.navigate('Profile')} mb={20} />
      <Button text='sair' onPress={logout} />
    </Column>
  )
}

export default HomeScreen
