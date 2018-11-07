import React from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'
import units from '../Foundations/units'
import margin from '../Foundations/margin'
import { H6, P } from '../Foundations/typography'
import Row from '../Foundations/row'

const Card = styled.div`
  background: #fff;
  border-radius: 3px;
  color: #5f6368;
  font-size: 13px;
  margin: 40px 0;
  overflow: hidden;
  vertical-align: top;
  z-index: 1;
  box-shadow: 0 1px 1px 0 rgba(60,64,67,.08), 0 1px 3px 1px rgba(60,64,67,.16);

  max-width: 750px;
`

const CardContent = styled.div`
  padding: ${units(6)};
`

const CardTitle = styled(H6)`
  > * {
    margin-bottom: 0
  }
  ${margin}
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
        <CardTitle>
          {name}
          <P>{location}</P>
        </CardTitle>
        <P>{title}</P>
        <P>{`${startDate} - ${endDate || 'Present'}`}</P>
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
