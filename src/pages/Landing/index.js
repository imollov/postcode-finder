import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import Page from './components/Page'

import { useGlobalResultContext } from '../../context/GlobalState'

const Landing = () => {
  const history = useHistory()
  const result = useGlobalResultContext()

  useEffect(() => {
    result && history.push(`/r/${result.id}`)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result])

  return <Page />
}

export default Landing
