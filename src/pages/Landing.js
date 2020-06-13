import React from 'react'
import { Box, Heading } from 'grommet'

import Search from '../components/Search'

export default () => {
  return (
    <Box fill background="brand">
      <Box flex align="center" margin={{ top: 'xlarge' }}>
        <Heading size="medium" color="accent">
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
