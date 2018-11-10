import React from 'react'
import { storiesOf } from '@storybook/react'
import Header from './Header'
import Paragraph from './Paragraph'
import Small from './Small'
import Strong from './Strong'

storiesOf('Typography', module)
  .add('Header', () => (
    <>
      <Header size="large">Header Large</Header>
      <Header size="medium">
        Header Medium
        <Small>&nbsp;Small text</Small>
      </Header>
      <Header size="small">Header Small</Header>
    </>
  ))
  .add('Paragraph', () => (
    <>
      <Header size="small">Small Header</Header>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere venenatis nunc eu
        tristique. Etiam sed placerat tellus, a accumsan nisi. Donec congue volutpat lacinia. Donec
        convallis tortor ac mi fringilla mattis. Nunc consequat nisi tellus, at mollis turpis
        fringilla in. Nulla ligula metus, lacinia sed maximus in, elementum eget odio. Quisque leo
        turpis, tincidunt eget imperdiet suscipit, efficitur vitae quam. Vestibulum sem orci,
        ullamcorper sit amet molestie fringilla, venenatis eget tellus. Morbi a quam eget risus
        gravida tincidunt. Aliquam sit amet feugiat sapien, eget lacinia ligula.
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce hendrerit augue lorem, nec
        consequat tellus aliquet ut. Proin vel rhoncus erat, nec ornare nisi. In a sapien tellus.
        Mauris ac suscipit nisl. Praesent varius diam sit amet neque suscipit vulputate. Etiam
        dictum placerat nisi nec placerat.
        <Strong> Strong text: Nam in lacus metus.</Strong>
        <Small> Small text: Quisque ac nisl eu risus tempus laoreet quis bibendum nulla.</Small>
      </Paragraph>
    </>
  ))
