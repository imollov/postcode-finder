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
  const result = useGlobalResultContext()
  const suggestions = useGlobalSuggestionsContext()
  const error = useGlobalErrorContext()

  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    if (result && result.address === searchValue) return
    if (searchValue.length > 5)
      debounce(() => searchByAddress(searchValue), 600)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue])

  useEffect(() => {
    result && setSearchValue(result.address)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result])

  const onChange = ({ target: { value } }) => setSearchValue(value)
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
