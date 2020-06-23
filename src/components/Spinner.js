import React, { useContext } from 'react'
import BarLoader from 'react-spinners/BarLoader'
import { Box } from 'grommet'

import { ThemeContext } from 'styled-components'
import { GlobalContext } from '../context/GlobalState'

const Spinner = (props) => {
  const {
    global: {
      colors: { accent },
    },
  } = useContext(ThemeContext)

  const { loading } = useContext(GlobalContext)

  return (
    <Box height="4px" {...props}>
      <BarLoader loading={loading} color={accent} width="100%" />
    </Box>
  )
}

export default Spinner
