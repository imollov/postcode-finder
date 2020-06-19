import React, { useEffect, useContext } from 'react'
import { Box } from 'grommet'
import { useParams } from 'react-router-dom'

import { GlobalContext } from '../../context/GlobalState'

import Header from './components/Header'
import Map from './components/Map'

export default () => {
  const { address: addressParam } = useParams()
  const { search, result, setResult } = useContext(GlobalContext)

  useEffect(() => {
    if (!result || addressParam !== result.address) {
      search(addressParam).then(() => setResult(addressParam))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addressParam])

  if (!result) return null

  return (
    <Box fill>
      <Header />
      <Box fill>
        <Map />
      </Box>
    </Box>
  )
}
