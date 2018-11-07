import React from 'react'
import { storiesOf } from '@storybook/react'
import { H1, H2, H3, H4, H5, H6, P } from './typography'

storiesOf('Typography', module)
  .add('headers and body text', () => (
    <>
      <H1>Heading 1</H1>
      <H2>Heading 2</H2>
      <H3>Heading 3</H3>
      <H4>Heading 4</H4>
      <H5>Heading 5</H5>
      <H6>Heading 6</H6>
      <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae rutrum nisi. Donec bibendum augue id ipsum molestie dignissim at eu felis. Vivamus ipsum quam, vestibulum luctus urna a, imperdiet rhoncus ex. Suspendisse potenti. Duis metus nibh, suscipit in sem sed, consectetur ultricies metus. In fermentum, quam vel vehicula vestibulum, orci neque consequat est, vitae tempor sem sem quis magna. Proin congue orci ut tincidunt accumsan. Donec vulputate vulputate orci. Praesent vestibulum justo nec nisi semper tempor. Quisque et risus non sem consequat pharetra. Vestibulum quis tellus arcu. Cras rhoncus elit enim, sed semper turpis pulvinar in. Sed varius luctus enim, nec rutrum massa commodo in. Donec blandit placerat massa vel rutrum.</P>
    </>
  ))
