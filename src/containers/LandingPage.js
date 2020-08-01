import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Box, ResponsiveContext } from 'grommet'

import Logo from '../components/Logo'
import AddressSearch from './AddressSearch'
import GeoLocationSearch from './GeoLocationSearch'

const LandingPage = () => {
  const redirectTo = useSelector((s) => s.redirectTo)

  const size = useContext(ResponsiveContext)
  const isSmall = size === 'small'

  return redirectTo ? (
    <Redirect to={redirectTo} />
  ) : (
    <>
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
    </>
  )
}

export default LandingPage
