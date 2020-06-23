import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { GlobalProvider } from './context/GlobalState'

import PageRoutes from './pages'

const App = () => (
  <GlobalProvider>
    <BrowserRouter>
      <PageRoutes />
    </BrowserRouter>
  </GlobalProvider>
)

export default App
