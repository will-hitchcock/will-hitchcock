import React from 'react'
import { storiesOf } from '@storybook/react'
import Icon from './index'

storiesOf('Icon', module)
  .add('linkedin', () => (
    <Icon name="linkedin" color="#0077B5" size={32} />
  ))
  .add('twitter', () => (
    <Icon name="twitter" color="#1DA1F2" size={64} />
  ))
  .add('github', () => (
    <Icon name="github" color="#000000" size={128} />
  ))
