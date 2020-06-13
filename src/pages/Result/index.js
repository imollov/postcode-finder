import React from 'react'
import { Box } from 'grommet'

import Header from './components/Header'
import Map from './components/Map'

const lat = 42.63020858821471
const lng = 23.382821653720946
const postalCode = '1707'

export default () => {
  return (
    <Box fill>
      <Header />
      <Box fill>
        <Map lat={lat} lng={lng} postalCode={postalCode} />
      </Box>
    </Box>
  )
}
