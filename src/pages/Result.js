import React from 'react'
import { Box, Heading, Header, ResponsiveContext } from 'grommet'

import Search from '../components/Search'

export default () => {
  const size = React.useContext(ResponsiveContext)
  const isSmall = size === 'small'

  return (
    <Box fill>
      <Header
        background="brand"
        justify="start"
        direction={isSmall ? 'column' : 'row'}
      >
        <Box
          pad={{ left: 'small' }}
          width={!isSmall ? { min: '260px' } : 'none'}
        >
          <Heading size="small">PostcodeFinder</Heading>
        </Box>
        <Search
          value="Example address"
          fill="horizontal"
          width={{ max: 'large' }}
          pad={
            isSmall
              ? {
                  horizontal: 'large',
                  bottom: 'large',
                }
              : 'none'
          }
        />
      </Header>
    </Box>
  )
}
