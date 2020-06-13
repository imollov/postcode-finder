import React from 'react'
import { Box, Header, ResponsiveContext } from 'grommet'

import Logo from '../../../components/Logo'
import Search from '../../../components/Search'

const address = 'Mladost 4, Sofia'

export default () => {
  const size = React.useContext(ResponsiveContext)
  const isSmall = size === 'small'

  return (
    <Header
      background="brand"
      justify="start"
      direction={isSmall ? 'column' : 'row'}
    >
      <Box flex={false} pad={{ left: 'small' }}>
        <Logo size="small" color="accent" />
      </Box>
      <Search
        value={address}
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
  )
}
