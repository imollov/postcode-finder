import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import Page from './components/Page'

import { useGlobalResultContext } from '../../context/GlobalState'

const Landing = () => {
  const history = useHistory()
  const result = useGlobalResultContext()

  useEffect(() => {
    result && history.push(`/r/${result.id}`)
  }, [result, history])

  return <Page />
}

export default Landing
