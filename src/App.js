import React from 'react'
import { Grommet } from 'grommet'
import { grommet } from 'grommet/themes'

// import LandingPage from './pages/Landing'
import ResultPage from './pages/Result'

function App() {
  return (
    <Grommet full theme={grommet}>
      <ResultPage />
    </Grommet>
  )
}

export default App
