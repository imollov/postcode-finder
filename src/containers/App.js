import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AppLoading from './AppLoading'
import Layout from '../components/Layout'
import Splash from '../components/Splash'

const LandingPage = lazy(() => import('./LandingPage'))
const ResultPage = lazy(() => import('./ResultPage'))

const App = () => (
  <BrowserRouter>
    <Suspense fallback={<Splash />}>
      <Layout>
        <AppLoading />
        <Switch>
          <Route path="/" exact>
            <LandingPage />
          </Route>
          <Route path="/result">
            <ResultPage />
          </Route>
        </Switch>
      </Layout>
    </Suspense>
  </BrowserRouter>
)

export default App
