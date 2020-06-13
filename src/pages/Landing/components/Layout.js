import React from 'react'
import { Box } from 'grommet'

export default (props) => {
  return (
    <Box fill background="brand">
      <Box flex align="center" margin={{ top: 'xlarge' }} {...props} />
    </Box>
  )
}
