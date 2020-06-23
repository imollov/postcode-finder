import React, { useState, useContext, useEffect } from 'react'

import AddressInput from './AddressInput'
import debounce from '../../utils/debounce'

import { GlobalContext } from '../../context/GlobalState'

const AddressSearch = (props) => {
  const { searchByAddress, suggestions, setResult, result, error } = useContext(
    GlobalContext,
  )
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    if (result && searchValue === result.address) return
    if (searchValue.length > 5)
      debounce(() => searchByAddress(searchValue), 600)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue])

  useEffect(() => {
    result && setSearchValue(result.address)
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
