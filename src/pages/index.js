import React, { useContext, useEffect, lazy, Suspense } from 'react'
import { useHistory, Redirect } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
import Splash from '../components/Splash'

import { GlobalContext } from '../context/GlobalState'

const LandingPage = lazy(() => import('./Landing'))
const ResultPage = lazy(() => import('./Result'))

export default () => {
  const history = useHistory()
  const { result } = useContext(GlobalContext)

  useEffect(() => {
    result && history.push(`/r/${result.id}`)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result])

  return (
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
}
