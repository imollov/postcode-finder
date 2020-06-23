import React, { useContext } from 'react'
import { Box, ResponsiveContext } from 'grommet'

import Logo from '../../../components/Logo'
import AddressSearch from '../../../components/AddressSearch'
import LocationSearch from '../../../components/LocationSearch'

const Content = () => {
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
        <LocationSearch />
      </Box>
    </Box>
  )
}

export default Content
