import React from 'react'
import { Text } from 'react-native'

import { Column, Button } from 'src/components'

const ProfileScreen = ({ navigation }) => (
  <Column flex={1} justifyContent='center' p={40}>
    <Text>Profile Screen</Text>
    <Button text='go to home' onPress={() => navigation.navigate('Home')} />
  </Column>
)

export default ProfileScreen
