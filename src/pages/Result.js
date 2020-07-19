import React, { useContext } from 'react'
import { Box, Header as HeaderBox, ResponsiveContext } from 'grommet'

import AddressInput from '../components/AddressInput'
import LocationSearch from '../components/LocationSearch'
import Map from '../components/Map'
import Logo from '../components/Logo'
import Layout from '../components/Layout'
import Spinner from '../components/Spinner'

const Result = () => {
  const size = useContext(ResponsiveContext)
  const isSmall = size === 'small'

  return (
    <Layout>
      <Box height="4px">
        <Spinner />
      </Box>
      <HeaderBox justify="start" direction={isSmall ? 'column' : 'row'}>
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
          <AddressInput />
          <LocationSearch />
        </Box>
      </HeaderBox>
      <Map />
    </Layout>
  )
}

export default Result
