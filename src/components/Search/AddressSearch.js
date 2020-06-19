import React, { useState, useContext, useEffect } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import debounce from '../../utils/debounce'

import AddressInput from './AddressInput'

const AddressSearch = () => {
  const { searchByAddress, suggestions, setResult, result } = useContext(
    GlobalContext,
  )
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    if (!result || result.address !== searchValue) {
      searchValue.length > 5 &&
        debounce(() => searchByAddress(searchValue), 600)
    }
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
    />
  )
}

export default AddressSearch
