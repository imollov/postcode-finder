import React from 'react'
import { Box, Header, ResponsiveContext } from 'grommet'

import Logo from '../../components/Logo'
import Search from '../../components/Search'
import Map from './components/Map'

const lat = 42.63020858821471
const lng = 23.382821653720946
const postalCode = '1707'
const address = 'Mladost 4, Sofia'

export default () => {
  const size = React.useContext(ResponsiveContext)
  const isSmall = size === 'small'

  return (
    <Box fill>
      <Header
        background="brand"
        justify="start"
        direction={isSmall ? 'column' : 'row'}
      >
        <Box flex={false} pad={{ left: 'small' }}>
          <Logo size="small" color="accent" />
        </Box>
        <Search
          value={address}
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
        />
      </Header>
      <Box fill>
        <Map lat={lat} lng={lng} postalCode={postalCode} />
      </Box>
    </Box>
  )
}
