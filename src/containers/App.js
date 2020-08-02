import React, { lazy, Suspense } from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import AppLoading from './AppLoading'
import Layout from '../components/Layout'
import Splash from '../components/Splash'

const LandingPage = lazy(() => import('./LandingPage'))
const ResultPage = lazy(() => import('./ResultPage'))

function App() {
  const redirectTo = useSelector((s) => s.redirectTo)

  return (
    <BrowserRouter>
      <Suspense fallback={<Splash />}>
        {redirectTo ? <Redirect to={redirectTo} /> : null}
        <Layout>
          <AppLoading />
          <Switch>
            <Route path="/" exact>
              <LandingPage />
            </Route>
            <Route path="/:placeId">
              <ResultPage />
            </Route>
          </Switch>
        </Layout>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
