import { createGlobalStyle } from 'styled-components'

// Prevent Google Map from setting a different Roboto font to the marker
const GlobalStyle = createGlobalStyle`
  .gm-style {
    font: inherit;
  }
`

export default GlobalStyle
