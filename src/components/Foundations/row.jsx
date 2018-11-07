import styled from 'styled-components'
import margin from './margin'

const Row = styled.div`
  ${margin}
  flex-direction: row;
  > * {
    margin: 0 8px;
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  }
`

export default Row
