import React from 'react'
import { Grommet } from 'grommet'
import { BrowserRouter } from 'react-router-dom'
import { GlobalProvider } from './context/GlobalState'

import PageRoutes from './pages'
import theme from './theme'

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
