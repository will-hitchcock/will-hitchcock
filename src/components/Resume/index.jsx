import React from 'react'
// import styled from 'styled-components'

const Resume = ({ experienceSets }) => experienceSets.map(({
  node: { ...props },
}) => (
  <ExperienceSet {...props} />
))

export default Resume
