import React, { useState, useEffect } from 'react'

import AddressInput from './AddressInput'
import debounce from '../../utils/debounce'

import {
  useGlobalActionsContext,
  useGlobalResultContext,
  useGlobalSuggestionsContext,
  useGlobalErrorContext,
} from '../../context/GlobalState'

const AddressSearch = (props) => {
  const { searchByAddress, setResult } = useGlobalActionsContext()
  const result = useGlobalResultContext() || {}
  const suggestions = useGlobalSuggestionsContext()
  const error = useGlobalErrorContext()

  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    setSearchValue(result.address)
  }, [result.address])

  const search = (value) =>
    value.length > 5 && debounce(() => searchByAddress(value), 600)

  const onChange = ({ target: { value } }) => {
    setSearchValue(value)
    search(value)
  }

  const onSelect = ({ suggestion }) => setResult(suggestion)

  return (
    <AddressInput
      value={searchValue}
      onChange={onChange}
      onSelect={onSelect}
      suggestions={suggestions.map((s) => s.address)}
      error={error}
      {...props}
    />
  )
}

export default AddressSearch
