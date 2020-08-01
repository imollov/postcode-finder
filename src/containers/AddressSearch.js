import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import AddressInput from '../components/AddressInput'
import debounce from '../utils/debounce'
import { getPlaces, selectPlace } from '../actions'

function AddressSearch(props) {
  const suggestions = useSelector((s) => s.places.map((p) => p.address))
  const selectedAddress = useSelector(
    (s) => s.selectedPlace && s.selectedPlace.address,
  )
  const error = useSelector((s) => s.error)

  const dispatch = useDispatch()

  const handleInputChange = (address) =>
    address.length > 5 && debounce(() => dispatch(getPlaces({ address })), 250)

  const handleSuggestionSelect = ({ suggestion }) =>
    dispatch(selectPlace(suggestion))

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
