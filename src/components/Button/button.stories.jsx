import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from './index'
import Row from '../Foundations/row'

storiesOf('Button', module)
  .add('primary', () => (
    <Button
      text="Primary"
      url="https://google.com"
    />
  ))
  .add('inverted', () => (
    <Button
      text="Inverted"
      url="https://google.com"
      inverted
    />
  ))
  .add('row of buttons', () => (
    <Row>
      <Button
        text="Primary"
        url="https://google.com"
      />
      <Button
        text="Inverted"
        url="https://google.com"
        inverted
      />
    </Row>
  ))
