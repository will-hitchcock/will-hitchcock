import styled, { css } from 'styled-components'
import { boolean } from 'prop-types'
import units from './units'
import margin from './margin'
import { glitter, black } from './colors'

const styles = css`
  ${margin}
  line-height: 1;
  display: flex;
  color: ${({ inverted }) => (inverted ? glitter : black)};
`

const propTypes = {
  inverted: boolean,
}

const defaultProps = {
  inverted: false,
}

export const H1 = styled.h1`
  font-size: ${units(16)};
  ${styles}
`

export const H2 = styled.h2`
  font-size: ${units(14)};
  ${styles}
`

export const H3 = styled.h3`
  font-size: ${units(12)};
  ${styles}
`

export const H4 = styled.h4`
  font-size: ${units(10)};
  ${styles}
`

export const H5 = styled.h5`
  font-size: ${units(8)};
  ${styles}
`

export const H6 = styled.h6`
  font-size: ${units(6)};
  ${styles}
`

export const P = styled.p`
  font-size: ${units(4)}
  ${styles}
`

H1.propTypes = propTypes
H1.defaultProps = defaultProps
H2.propTypes = propTypes
H2.defaultProps = defaultProps
H3.propTypes = propTypes
H3.defaultProps = defaultProps
H4.propTypes = propTypes
H4.defaultProps = defaultProps
H5.propTypes = propTypes
H5.defaultProps = defaultProps
H6.propTypes = propTypes
H6.defaultProps = defaultProps
P.propTypes = propTypes
P.defaultProps = defaultProps
