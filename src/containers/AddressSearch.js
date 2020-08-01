import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import AddressInput from '../components/AddressInput'
import debounce from '../utils/debounce'
import { getPlaces, selectPlace } from '../actions'

function AddressSearch(props) {
  const selectedPlace = useSelector((s) => s.selectedPlace)
  const suggestions = useSelector((s) => s.places.map((p) => p.address))
  const error = useSelector((s) => s.error)

  const dispatch = useDispatch()

  const handleSearch = (address) =>
    address.length > 5 && debounce(() => dispatch(getPlaces({ address })), 250)

  const handleSelect = (value) => {
    dispatch(selectPlace(value))
  }

  return (
    <AddressInput
      onChange={handleSearch}
      onSelect={handleSelect}
      suggestions={suggestions}
      address={selectedPlace}
      error={error}
      {...props}
    />
  )
}

export default AddressSearch
