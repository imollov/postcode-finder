import React, { useContext } from 'react'
import BarLoader from 'react-spinners/BarLoader'
import { ThemeContext } from 'styled-components'
import { Box } from 'grommet'

const LoadingBar = ({ loading, ...rest }) => {
  const {
    global: {
      colors: { accent },
    },
  } = useContext(ThemeContext)

  return (
    <Box height="4px">
      <BarLoader loading={loading} color={accent} width="100%" {...rest} />
    </Box>
  )
}

export default LoadingBar
