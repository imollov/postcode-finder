import React from 'react'
import { Switch, Route } from 'react-router-dom'

import LandingPage from './Landing'
import ResultPage from './Result'

export default () => {
  return (
    <Switch>
      <Route path="/" exact component={LandingPage} />
      <Route path="/r/:address" component={ResultPage} />
    </Switch>
  )
}
