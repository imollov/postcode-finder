import React, { useEffect, useContext } from 'react'
import { Box } from 'grommet'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../../context/GlobalState'

import Layout from '../../components/Layout'
import Header from './components/Header'
import Map from './components/Map'

export default () => {
  const { address: addressParam } = useParams()
  const { searchByAddress, result, setResult } = useContext(GlobalContext)

  useEffect(() => {
    if (!result || addressParam !== result.address) {
      searchByAddress(addressParam).then(() => setResult(addressParam))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addressParam])

  if (!result) return null

  return (
    <Layout fill>
      <Header />
      <Box fill>
        <Map />
      </Box>
    </Layout>
  )
}
