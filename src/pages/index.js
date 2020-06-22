import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'

import LandingPage from './Landing'
import ResultPage from './Result'

import { GlobalContext } from '../context/GlobalState'

export default () => {
  const history = useHistory()
  const { result } = useContext(GlobalContext)

  useEffect(() => {
    result && history.push(`/r/${result.address}`)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result])

  return (
    <Switch>
      <Route path="/" exact component={LandingPage} />
      <Route path="/r/:address" component={ResultPage} />
    </Switch>
  )
}
