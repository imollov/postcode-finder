import React, { useContext } from 'react'
import { Box, ResponsiveContext } from 'grommet'

import Layout from './components/Layout'
import Logo from '../../components/Logo'
import AddressSearch from '../../components/AddressSearch'
import LocationSearch from '../../components/LocationSearch'

export default () => {
  const size = useContext(ResponsiveContext)
  const isSmall = size === 'small'

  return (
    <Layout>
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
    </Layout>
  )
}
