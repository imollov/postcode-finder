import React, { useContext } from 'react'
import { Box, ResponsiveContext } from 'grommet'

import Logo from '../../components/Logo'
import Spinner from '../../components/Spinner'
import AddressSearch from '../../components/AddressSearch'
import LocationSearch from '../../components/LocationSearch'

export default () => {
  const size = useContext(ResponsiveContext)
  const isSmall = size === 'small'

  return (
    <Box fill background="brand">
      <Box height="4px">
        <Spinner />
      </Box>
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
          <AddressSearch />
          <LocationSearch />
        </Box>
      </Box>
    </Box>
  )
}
