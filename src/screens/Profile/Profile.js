import React from 'react'

import { Column, Button, Text } from 'src/components'

const ProfileScreen = ({ navigation }) => (
  <Column flex={1} justifyContent='center' p={40}>
    <Text>Profile Screen</Text>
    <Button text='go to home' onPress={() => navigation.navigate('Home')} />
  </Column>
)

export default ProfileScreen
