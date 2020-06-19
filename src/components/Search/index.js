import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Box } from 'grommet'

import AddressSearch from './AddressSearch'
import LocationSearch from './LocationSearch'

import { GlobalContext } from '../../context/GlobalState'

export default (props) => {
  const history = useHistory()
  const { result } = useContext(GlobalContext)

  useEffect(() => {
    result && history.push(`/r/${result.address}`)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result])

  return (
    <Box direction="row" {...props}>
      <AddressSearch />
      <LocationSearch />
    </Box>
  )
}
