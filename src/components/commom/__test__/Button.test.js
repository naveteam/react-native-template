import React from 'react'
import { Text } from 'react-native'
import { create } from 'react-test-renderer'
import 'jest-styled-components'

import Button from '../Button'

describe('<Button />', () => {
  it('render Button with custom name', () => {
    const tree = create(<Button name='João' />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('render Button with custom Background color', () => {
    const tree = create(<Button text='João' bg='red' />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
