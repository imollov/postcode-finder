import React from 'react'
import { Box } from 'grommet'
import Spinner from './Spinner'

import { useGlobalLoadingContext } from '../../context/GlobalState'

const LoadingBar = (props) => {
  const loading = useGlobalLoadingContext()

  return (
    <Box height="4px" {...props}>
      <Spinner loading={loading} />
    </Box>
  )
}

export default LoadingBar
