import React, { useContext } from 'react'
import { Box, ResponsiveContext } from 'grommet'

import Logo from './Logo'
import AddressSearch from '../containers/AddressSearch'
import GeoLocationSearch from '../containers/GeoLocationSearch'

const Landing = () => {
  const size = useContext(ResponsiveContext)
  const isSmall = size === 'small'

  return (
    <Box flex align="center" margin={{ top: 'xlarge' }}>
      <Logo size="medium" color="accent" />
      <Box
        direction="row"
        width="large"
        pad={{
          horizontal: isSmall ? 'large' : 'xlarge',
          vertical: isSmall ? 'medium' : 'xsmall',
        }}
      >
        <AddressSearch autoFocus />
        <GeoLocationSearch />
      </Box>
    </Box>
  )
}

export default Landing
