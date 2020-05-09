import React from 'react'
import { Box, Heading } from 'grommet'

import Search from '../components/Search'

export default () => {
  return (
    <Box fill>
      <Box flex align="center" margin={{ top: 'xlarge' }}>
        <Heading size="medium" color="brand">
          PostcodeFinder
        </Heading>
        <Search width="large" pad={{ horizontal: 'xlarge' }} />
      </Box>
    </Box>
  )
}
