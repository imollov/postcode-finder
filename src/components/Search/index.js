import React from 'react'
import { Box } from 'grommet'

import AddressInput from './AddressInput'
import LocateButton from './LocateButton'

const Search = (props) => {
  return (
    <Box direction="row" {...props}>
      <AddressInput />
      <LocateButton />
    </Box>
  )
}

export default Search
