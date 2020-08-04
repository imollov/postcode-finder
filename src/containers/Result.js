import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

import Header from '../components/Header'
import ResultMap from '../components/ResultMap'
import { searchAndSelectFirst } from '../actions'

const apiKey = process.env.REACT_APP_API_KEY

function Result() {
  const { resultId } = useParams()
  const selectedResult = useSelector((s) => s.selectedResult)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!selectedResult) {
      dispatch(searchAndSelectFirst({ place_id: resultId }))
    }
  }, [resultId, selectedResult, dispatch])

  useEffect(() => {
    if (selectedResult) {
      document.title = selectedResult.address
    }
  }, [selectedResult])

  if (!selectedResult) return null

  const {
    location: { lat, lng },
    postalCode,
  } = selectedResult

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
