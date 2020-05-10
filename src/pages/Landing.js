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
        <Search
          suggestions={['Example 1', 'Example 2']}
          width="large"
          pad={{ horizontal: 'xlarge' }}
        />
      </Box>
    </Box>
  )
}
