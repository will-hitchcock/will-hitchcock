import React from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'
import units from '../Foundations/units'
import Header from '../Typography/Header'
import Small from '../Typography/Small'
import Text from '../Typography/Text'
import Row from '../Foundations/row'

const Card = styled.div`

`

const CardContent = styled.div`
  padding: ${units(6)};
`

const Experience = ({
  logo,
  name,
  title,
  startDate,
  endDate,
  location,
  hero,
}) => (
  <Card>
    <img src={hero} alt={name} />
    <CardContent>
      <Row>
        <img src={logo} alt={name} />
        <Header size="small">
          {name}
          <Small>&nbsp;{location}</Small>
        </Header>
        <Text>{title}</Text>
        <Text>{`${startDate} - ${endDate || 'Present'}`}</Text>
      </Row>
    </CardContent>
  </Card>
)

Experience.propTypes = {
  logo: string.isRequired,
  hero: string.isRequired,
  name: string.isRequired,
  title: string.isRequired,
  startDate: string.isRequired,
  endDate: string,
  location: string.isRequired,
}

Experience.defaultProps = {
  endDate: '',
}

export default Experience
