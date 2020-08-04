import React, { lazy, Suspense } from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import AppLoading from './AppLoading'
import Layout from '../components/Layout'
import Splash from '../components/Splash'
import { getRedirectTo } from '../selectors'

const Landing = lazy(() => import('../components/Landing'))
const Result = lazy(() => import('./Result'))

function App() {
  const redirectTo = useSelector(getRedirectTo)

  return (
    <BrowserRouter>
      <Suspense fallback={<Splash />}>
        {redirectTo ? <Redirect to={redirectTo} /> : null}
        <Layout>
          <AppLoading />
          <Switch>
            <Route path="/" exact>
              <Landing />
            </Route>
            <Route path="/:resultId">
              <Result />
            </Route>
          </Switch>
        </Layout>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
