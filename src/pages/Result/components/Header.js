import React from 'react'
import { Box, Header, ResponsiveContext } from 'grommet'

import Logo from '../../../components/Logo'
import AddressSearch from '../../../components/AddressSearch'
import LocationSearch from '../../../components/LocationSearch'

export default () => {
  const size = React.useContext(ResponsiveContext)
  const isSmall = size === 'small'

  return (
    <Header justify="start" direction={isSmall ? 'column' : 'row'}>
      <Box flex={false} pad={{ left: 'small' }}>
        <Logo size="small" color="accent" />
      </Box>
      <Box
        direction="row"
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
      >
        <AddressSearch />
        <LocationSearch />
      </Box>
    </Header>
  )
}
