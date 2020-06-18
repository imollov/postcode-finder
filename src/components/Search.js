import React, { useState, useContext, useEffect } from 'react'
import { Box, TextInput, Button } from 'grommet'
import { FormSearch, Waypoint } from 'grommet-icons'

import { GlobalContext } from '../context/GlobalState'
import debounce from '../utils/debounce'

export default (props) => {
  const [searchValue, setSearchValue] = useState('')
  const { search, suggestions, setResult } = useContext(GlobalContext)

  useEffect(() => {
    searchValue.length > 5 && debounce(() => search(searchValue), 600)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue])

  const onChange = ({ target: { value } }) => setSearchValue(value)
  const onSelect = ({ suggestion }) => setResult(suggestion)

  return (
    <Box direction="row" {...props}>
      <TextInput
        value={searchValue}
        onChange={onChange}
        onSelect={onSelect}
        type="search"
        icon={<FormSearch color="accent" />}
        placeholder="Search an address worldwide..."
        suggestions={suggestions.map((s) => s.address)}
      />
      <Button a11yTitle="Locate me" icon={<Waypoint color="accent" />} />
    </Box>
  )
}
