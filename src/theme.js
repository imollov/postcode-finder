import { deepMerge } from 'grommet/utils'
import { grommet } from 'grommet/themes'

export default deepMerge(grommet, {
  global: {
    colors: {
      brand: '#10375c',
      accent: '#f3c623',
      border: '#999999',
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