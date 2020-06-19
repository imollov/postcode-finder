import React, { useState, useContext, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { TextInput } from 'grommet'
import { FormSearch } from 'grommet-icons'

import { GlobalContext } from '../../context/GlobalState'
import debounce from '../../utils/debounce'

const AddressInput = (props) => {
  const { search, suggestions, setResult, result } = useContext(GlobalContext)
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    if (!result || result.address !== searchValue) {
      searchValue.length > 5 && debounce(() => search(searchValue), 600)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue])

  useEffect(() => {
    result && setSearchValue(result.address)
  }, [result])

  const onChange = ({ target: { value } }) => setSearchValue(value)

  const onSelect = ({ suggestion }) => {
    setResult(suggestion)
    props.history.push(`/r/${suggestion}`)
  }

  return (
    <TextInput
      value={searchValue}
      onChange={onChange}
      onSelect={onSelect}
      type="search"
      icon={<FormSearch color="accent" />}
      placeholder="Search an address worldwide..."
      suggestions={suggestions.map((s) => s.address)}
    />
  )
}

export default withRouter(AddressInput)
