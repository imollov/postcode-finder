import { deepMerge } from 'grommet/utils'
import { grommet } from 'grommet/themes'

const theme = deepMerge(grommet, {
  global: {
    colors: {
      brand: '#10375c',
      accent: '#f3c623',
      neutral: '#999999',
      focus: '#faf4ff',
    },
    control: {
      border: {
        color: 'neutral',
      },
    },
    focus: {
      border: {
        color: 'focus',
      },
    },
  },
  anchor: {
    color: 'neutral',
  },
})

export default theme
