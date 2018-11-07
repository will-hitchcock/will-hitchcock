import React from 'react'
import { storiesOf } from '@storybook/react'
import Experience from './index'

storiesOf('Experience', module)
  .add('Work experience', () => (
    <Experience
      logo="http://willhitchcock.me/img/logos/ambassador.png"
      hero="http://willhitchcock.me/img/graphics/ambassador-graphic.jpg"
      name="Ambassador"
      title="Software Engineer"
      startDate="Apr 2017"
      location="Royal Oak, MI"
    />
  ))
