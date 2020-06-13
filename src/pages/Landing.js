import React from 'react'
import { Box } from 'grommet'

import Logo from '../components/Logo'
import Search from '../components/Search'

export default () => {
  return (
    <Box fill background="brand">
      <Box flex align="center" margin={{ top: 'xlarge' }}>
        <Logo size="medium" color="accent" />
        <Search
          suggestions={['Example 1', 'Example 2']}
          width="large"
          pad={{ horizontal: 'xlarge' }}
        />
      </Box>
    </Box>
  )
}
