import React from 'react'
import { Grommet, Box } from 'grommet'
import theme from '../theme'

function Layout(props) {
  return (
    <Grommet full theme={theme}>
      <Box fill background="brand" {...props} />
    </Grommet>
  )
}

export default Layout
