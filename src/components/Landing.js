import React, { useContext } from 'react'
import { Anchor, Box, ResponsiveContext } from 'grommet'
import { Github } from 'grommet-icons'

import Logo from './Logo'
import AddressSearch from '../containers/AddressSearch'
import GeoLocationSearch from '../containers/GeoLocationSearch'

function Landing() {
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
      <Box pad={{ top: 'large' }}>
        <Anchor
          icon={<Github />}
          label="GitHub"
          size="small"
          href="https://github.com/imollov/postcode-finder"
          target="_blank"
        />
      </Box>
    </Box>
  )
}

export default Landing
