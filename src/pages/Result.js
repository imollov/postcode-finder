import React from 'react'
import { Box, Heading, Header, ResponsiveContext } from 'grommet'

import Search from '../components/Search'

export default () => {
  const size = React.useContext(ResponsiveContext)
  const isSmall = size === 'small'

  return (
    <Box fill>
      <Header
        background="accent"
        justify="start"
        direction={isSmall ? 'column' : 'row'}
      >
        <Box flex={false} pad={{ left: 'small' }}>
          <Heading size="small" color="brand">
            PostcodeFinder
          </Heading>
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
