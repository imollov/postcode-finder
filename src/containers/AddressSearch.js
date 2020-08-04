import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import AddressInput from '../components/AddressInput'
import debounce from '../utils/debounce'
import { search, selectResult } from '../actions'
import { getResultsAddresses, getSelectedAddress, getError } from '../selectors'

function AddressSearch(props) {
  const suggestions = useSelector(getResultsAddresses)
  const selectedAddress = useSelector(getSelectedAddress)
  const error = useSelector(getError)

  const dispatch = useDispatch()

  function handleInputChange(address) {
    if (address.length > 5) debounce(() => dispatch(search({ address })), 250)
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
