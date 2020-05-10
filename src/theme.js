import { deepMerge } from 'grommet/utils'
import { grommet } from 'grommet/themes'

export default deepMerge(grommet, {
  global: {
    colors: {
      brand: '#10375c',
      accent: '#f3c623',
      border: '#10375c',
      focus: '#faf4ff',
    },
    control: {
      border: {
        color: 'border',
      },
    },
    focus: {
      border: {
        color: 'focus',
      },
    },
  },
})
