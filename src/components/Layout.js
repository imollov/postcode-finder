import React from 'react'
import { Grommet, Box } from 'grommet'

import theme from '../theme'

export default (props) => (
  <Grommet full theme={theme}>
    <Box {...props} />
  </Grommet>
)
