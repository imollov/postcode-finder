import React from 'react'
import { Grommet, Box } from 'grommet'
import theme from '../theme'

function Layout(props) {
  return (
    <Grommet full css="min-height: 100vh" theme={theme}>
      <Box fill background="brand" {...props} />
    </Grommet>
  )
}

export default Layout
