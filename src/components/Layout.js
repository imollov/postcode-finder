import React from 'react'
import { Grommet, Box } from 'grommet'
import theme from '../theme'

const Layout = (props) => (
  <Grommet full theme={theme}>
    <Box fill background="brand" {...props} />
  </Grommet>
)

export default Layout
