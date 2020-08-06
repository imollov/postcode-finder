import React from 'react'
import debounce from 'lodash.debounce'
import { useSelector, useDispatch } from 'react-redux'

import AddressInput from '../components/AddressInput'
import { search, selectResult } from '../actions'
import { getResultsAddresses, getSelectedAddress, getError } from '../selectors'

function AddressSearch(props) {
  const suggestions = useSelector(getResultsAddresses)
  const selectedAddress = useSelector(getSelectedAddress)
  const error = useSelector(getError)

  const dispatch = useDispatch()

  const debouncedSearch = debounce(
    (address) => dispatch(search({ address })),
    300,
  )

  function handleInputChange(value) {
    if (value.length > 5) debouncedSearch(value)
  }

  function handleSuggestionSelect({ suggestion }) {
    dispatch(selectResult(suggestion))
  }

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
