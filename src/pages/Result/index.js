import React, { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Text } from 'grommet'

import Header from './components/Header'
import Map from './components/Map'
import Spinner from '../../components/Spinner'

import { GlobalContext } from '../../context/GlobalState'

export default () => {
  const { placeId } = useParams()
  const { searchById, result, error } = useContext(GlobalContext)

  useEffect(() => {
    if (result && placeId === result.id) return
    searchById(placeId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [placeId])

  useEffect(() => {
    result && (document.title = `${result.address} – PostcodeFinder`)
  }, [result])

  return (
    <Box fill background="brand">
      <Box height="4px">
        <Spinner />
      </Box>
      {error && !result && (
        <Box fill align="center" pad="medium">
          <Text color="status-critical">{error}</Text>
        </Box>
      )}
      {result && (
        <>
          <Header />
          <Box fill>
            <Map />
          </Box>
        </>
      )}
    </Box>
  )
}
