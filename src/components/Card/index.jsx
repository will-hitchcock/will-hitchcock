import styled from 'styled-components'

export const CardTite = styled(Header)`

`

export const CardImage = styled.img`

`

export const CardContent = styled.div`

`

const Card = styled.div`
  ${''/* TODO: Update colors to references */}
  display: flex;
  background: #fff;
  border-radius: 3px;
  color: #5f6368;
  font-size: 13px;
  margin: 40px 0;
  overflow: hidden;
  vertical-align: top;
  z-index: 1;
  box-shadow: 0 1px 1px 0 rgba(60,64,67,.08), 0 1px 3px 1px rgba(60,64,67,.16);
`

export default Card
