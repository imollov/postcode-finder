import React from 'react'
import Map from '../components/Map'
import { useSelector } from 'react-redux'

const key = process.env.REACT_APP_API_KEY

function ResultMap(props) {
  const result = useSelector((s) =>
    s.places.find((p) => p.address === s.selectedPlace),
  )

  if (!result) return null

  const {
    location: { lat, lng },
    postalCode,
  } = result

  return (
    <Map
      lat={lat}
      lng={lng}
      googleMapsKey={key}
      postalCode={postalCode}
      {...props}
    />
  )
}

export default ResultMap
