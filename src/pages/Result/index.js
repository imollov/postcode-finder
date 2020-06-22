import React, { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from 'grommet'

import Layout from '../../components/Layout'
import Header from './components/Header'
import Map from './components/Map'
import Spinner from '../../components/Spinner'

import { GlobalContext } from '../../context/GlobalState'

export default () => {
  const { address: addressParam } = useParams()
  const { searchByAddress, result, setResult } = useContext(GlobalContext)

  useEffect(() => {
    if (result && addressParam === result.address) return
    searchByAddress(addressParam).then(() => setResult(addressParam))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addressParam])

  return (
    <Layout fill background="brand">
      <Box height="4px">
        <Spinner />
      </Box>
      {result && (
        <>
          <Header />
          <Box fill>
            <Map />
          </Box>
        </>
      )}
    </Layout>
  )
}
