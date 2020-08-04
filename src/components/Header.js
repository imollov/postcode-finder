import React, { useContext } from 'react'
import { Box, Header as HeaderBox, ResponsiveContext } from 'grommet'

import Logo from './Logo'
import AddressSearch from '../containers/AddressSearch'
import GeoLocationSearch from '../containers/GeoLocationSearch'

const Header = (props) => {
  const size = useContext(ResponsiveContext)
  const isSmall = size === 'small'

  return (
    <HeaderBox
      justify="start"
      direction={isSmall ? 'column' : 'row'}
      {...props}
    >
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
        <GeoLocationSearch />
      </Box>
    </HeaderBox>
  )
}

export default Header
