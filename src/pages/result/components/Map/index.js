import React from 'react'
import GoogleMapReact from 'google-map-react'

import MarkerBox from './MarkerBox'
import MarkerContent from './MarkerContent'

const key = process.env.REACT_APP_API_KEY

export default ({ lat, lng, postalCode }) => (
  <GoogleMapReact
    bootstrapURLKeys={{ key }}
    defaultCenter={{ lat: lat + 0.0015, lng }}
    defaultZoom={16}
  >
    <MarkerBox lat={lat} lng={lng}>
      <MarkerContent postalCode={postalCode} />
    </MarkerBox>
  </GoogleMapReact>
)
