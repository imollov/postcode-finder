import React, { useContext } from 'react'
import { Box } from 'grommet'
import Spinner from './Spinner'

import { GlobalContext } from '../../context/GlobalState'

const LoadingBar = (props) => {
  const { loading } = useContext(GlobalContext)

  return (
    <Box height="4px" {...props}>
      <Spinner loading={loading} />
    </Box>
  )
}

export default LoadingBar
