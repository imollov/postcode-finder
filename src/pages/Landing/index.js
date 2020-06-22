import React from 'react'
import { Box } from 'grommet'
import Layout from './components/Layout'
import Logo from '../../components/Logo'
import AddressSearch from '../../components/AddressSearch'
import LocationSearch from '../../components/LocationSearch'

export default () => {
  return (
    <Layout>
      <Logo size="medium" color="accent" />
      <Box direction="row" width="large" pad={{ horizontal: 'xlarge' }}>
        <AddressSearch />
        <LocationSearch />
      </Box>
    </Layout>
  )
}
