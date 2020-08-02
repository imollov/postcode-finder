import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import Header from '../components/Header'
import ResultMap from '../components/ResultMap'
import { getPlacesAndSelectFirst } from '../actions'

const apiKey = process.env.REACT_APP_API_KEY

const Result = () => {
  const { placeId } = useParams()
  const selectedPlace = useSelector((s) => s.selectedPlace)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!selectedPlace) {
      dispatch(getPlacesAndSelectFirst({ place_id: placeId }))
    }
  }, [placeId, selectedPlace, dispatch])

  if (!selectedPlace) return null

  const {
    location: { lat, lng },
    postalCode,
  } = selectedPlace

  return (
    <>
      <Header />
      <ResultMap
        lat={lat}
        lng={lng}
        postalCode={postalCode}
        googleMapsKey={apiKey}
      />
    </>
  )
}

export default Result
