import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Grommet } from 'grommet'
import theme from './theme'

import { GlobalProvider } from './context/GlobalState'
import PageRoutes from './pages'

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Grommet full theme={theme}>
          <PageRoutes />
        </Grommet>
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App
