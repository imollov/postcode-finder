import React from 'react'
import styled from 'styled-components'
import { Heading } from 'grommet'

const LogoHeading = styled(Heading)`
  cursor: default;
`

const Logo = (props) => (
  <LogoHeading {...props}>
    <span role="img" aria-label="Post office">
      🏤
    </span>
    {' PostcodeFinder'}
  </LogoHeading>
)

export default Logo
