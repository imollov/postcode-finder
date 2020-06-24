import React, { lazy, Suspense } from 'react'
import { Redirect } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
import Splash from '../components/Splash'

const LandingPage = lazy(() => import('./Landing'))
const ResultPage = lazy(() => import('./Result'))

export default () => (
  <Suspense fallback={<Splash />}>
    <Switch>
      <Route path="/" exact>
        <LandingPage />
      </Route>
      <Redirect from="/r/" to="/" exact />
      <Route path="/r/:placeId">
        <ResultPage />
      </Route>
    </Switch>
  </Suspense>
)
