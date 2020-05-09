import React from 'react'
import { Grommet } from 'grommet'
import { grommet } from 'grommet/themes'

import LandingPage from './pages/Landing'

function App() {
  return (
    <Grommet full theme={grommet}>
      <LandingPage />
    </Grommet>
  )
}

export default App
