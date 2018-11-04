import React from 'react'
import { storiesOf } from '@storybook/react'
import SocialLink from './index'

storiesOf('SocialLink', module)
  .add('linkedin', () => (
    <SocialLink
      icon="linkedin"
      color="#0077B5"
      url="https://www.linkedin.com/in/willhitchcock"
    />
  ))
  .add('twitter', () => (
    <SocialLink
      icon="twitter"
      color="#1DA1F2"
      url="https://twitter.com/DrCaptScientist"
    />
  ))
  .add('github', () => (
    <SocialLink
      icon="github"
      color="#000000"
      url="https://github.com/will-hitchcock/"
    />
  ))
