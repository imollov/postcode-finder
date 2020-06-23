import React, { useContext } from 'react'
import BarLoader from 'react-spinners/BarLoader'

import { ThemeContext } from 'styled-components'

const Spinner = ({ loading, ...rest }) => {
  const {
    global: {
      colors: { accent },
    },
  } = useContext(ThemeContext)

  return <BarLoader loading={loading} color={accent} width="100%" {...rest} />
}

export default Spinner
