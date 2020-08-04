import React from 'react'
import styled from 'styled-components'
import { Heading } from 'grommet'

function Logo(props) {
  return (
    <LogoHeading {...props}>
      <span role="img" aria-label="Post office">
        🏤
      </span>
      {' PostcodeFinder'}
    </LogoHeading>
  )
}

const LogoHeading = styled(Heading)`
  cursor: default;
`

export default Logo
