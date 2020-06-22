import React, { useContext } from 'react'
import BarLoader from 'react-spinners/BarLoader'

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
    <BarLoader
      loading={loading}
      color={accent}
      height="4px"
      width="100%"
      {...props}
    />
  )
}

export default Spinner
