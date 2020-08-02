import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import AddressInput from '../components/AddressInput'
import debounce from '../utils/debounce'
import { search, selectResult } from '../actions'

function AddressSearch(props) {
  const suggestions = useSelector((s) => s.results.map((r) => r.address))
  const selectedAddress = useSelector(
    (s) => s.selectedResult && s.selectedResult.address,
  )
  const error = useSelector((s) => s.error)

  const dispatch = useDispatch()

  const handleInputChange = (address) =>
    address.length > 5 && debounce(() => dispatch(search({ address })), 250)

  const handleSuggestionSelect = ({ suggestion }) =>
    dispatch(selectResult(suggestion))

  return (
    <AddressInput
      onChange={handleInputChange}
      onSelect={handleSuggestionSelect}
      suggestions={suggestions}
      address={selectedAddress}
      error={error}
      {...props}
    />
  )
}

export default AddressSearch
