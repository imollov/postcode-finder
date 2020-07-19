import React, { useContext } from 'react'
import { Box, ResponsiveContext } from 'grommet'

import AddressInput from '../components/AddressInput'
import LocationSearch from '../components/LocationSearch'
import Logo from '../components/Logo'
import Layout from '../components/Layout'
import Spinner from '../components/Spinner'

const Landing = () => {
  const size = useContext(ResponsiveContext)
  const isSmall = size === 'small'

  return (
    <Layout>
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
          <AddressInput autoFocus />
          <LocationSearch />
        </Box>
      </Box>
    </Layout>
  )
}

export default Landing
