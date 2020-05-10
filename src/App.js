import React from 'react'
import { Grommet } from 'grommet'
import theme from './theme'

// import LandingPage from './pages/Landing'
import ResultPage from './pages/Result'

function App() {
  return (
    <Grommet full theme={theme}>
      <ResultPage />
    </Grommet>
  )
}

export default App
