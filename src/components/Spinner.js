import React, { useContext } from 'react'
import BarLoader from 'react-spinners/BarLoader'
import { ThemeContext } from 'styled-components'

const Spinner = (props) => {
  const {
    global: {
      colors: { accent },
    },
  } = useContext(ThemeContext)

  return <BarLoader loading color={accent} width="100%" {...props} />
}

export default Spinner
