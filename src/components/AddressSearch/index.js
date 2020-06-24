import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'

import AddressInput from './AddressInput'
import debounce from '../../utils/debounce'

import {
  useGlobalActionsContext,
  useGlobalResultContext,
  useGlobalSuggestionsContext,
  useGlobalErrorContext,
} from '../../context/GlobalState'

const AddressSearch = (props) => {
  const history = useHistory()
  const { placeId } = useParams()

  const { searchByAddress, searchById, setResult } = useGlobalActionsContext()
  const result = useGlobalResultContext()
  const suggestions = useGlobalSuggestionsContext()
  const error = useGlobalErrorContext()

  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    if (result && searchValue === result.address) return
    if (searchValue.length > 5)
      debounce(() => searchByAddress(searchValue), 600)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue])

  useEffect(() => {
    if (result) {
      setSearchValue(result.address)
      document.title = `${result.address} – PostcodeFinder`
      history.push(`/r/${result.id}`)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result])

  useEffect(() => {
    if (result && placeId === result.id) return
    placeId && searchById(placeId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [placeId])

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
