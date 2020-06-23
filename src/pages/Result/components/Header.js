import React, { useContext } from 'react'
import { Box, Header as HeaderBox, ResponsiveContext } from 'grommet'

import Logo from '../../../components/Logo'
import AddressSearch from '../../../components/AddressSearch'
import LocationSearch from '../../../components/LocationSearch'

const Header = () => {
  const size = useContext(ResponsiveContext)
  const isSmall = size === 'small'

  return (
    <HeaderBox justify="start" direction={isSmall ? 'column' : 'row'}>
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
    </HeaderBox>
  )
}

export default Header
