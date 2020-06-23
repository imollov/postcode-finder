import React, { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from 'grommet'

import Layout from '../../components/Layout'
import Spinner from '../../components/Spinner'
import Header from './components/Header'
import Map from './components/Map'

import { GlobalContext } from '../../context/GlobalState'

export default () => {
  const { placeId } = useParams()
  const { searchById, result } = useContext(GlobalContext)

  useEffect(() => {
    if (result && placeId === result.id) return
    searchById(placeId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [placeId])

  useEffect(() => {
    result && (document.title = `${result.address} – PostcodeFinder`)
  }, [result])

  return (
    <Layout>
      <Box height="4px">
        <Spinner />
      </Box>
      <Header />
      {result && (
        <Box fill>
          <Map />
        </Box>
      )}
    </Layout>
  )
}
