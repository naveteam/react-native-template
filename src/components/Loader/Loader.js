import React from 'react'
import { ActivityIndicator } from 'react-native'

import { Column } from '../Column'

const Loader = props => (
  <Column justifyContent='center' alignItems='center' {...props}>
    <ActivityIndicator size='large' color='#000000' />
  </Column>
)

export default Loader
