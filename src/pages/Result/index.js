import React, { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from 'grommet'

import Layout from '../../components/Layout'
import Header from './components/Header'
import Map from './components/Map'

import { GlobalContext } from '../../context/GlobalState'

export default () => {
  const { address: addressParam } = useParams()
  const { searchByAddress, result, setResult } = useContext(GlobalContext)

  useEffect(() => {
    if (result && addressParam === result.address) return
    searchByAddress(addressParam).then(() => setResult(addressParam))
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
