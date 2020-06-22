import React from 'react'
import { Box } from 'grommet'

import Spinner from '../../../components/Spinner'

export default (props) => {
  return (
    <Box fill background="brand">
      <Box height="4px">
        <Spinner />
      </Box>
      <Box flex align="center" margin={{ top: 'xlarge' }} {...props} />
    </Box>
  )
}
