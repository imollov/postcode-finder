import React from 'react'
import { Grommet } from 'grommet'
import theme from './theme'

import LandingPage from './pages/Landing'
// import ResultPage from './pages/Result'

import { GlobalProvider } from './context/GlobalState'

function App() {
  return (
    <GlobalProvider>
      <Grommet full theme={theme}>
        <LandingPage />
      </Grommet>
    </GlobalProvider>
  )
}

export default App
