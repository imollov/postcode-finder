import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import GoogleMapReact from 'google-map-react'
import { Box } from 'grommet'

import MarkerBox from './MarkerBox'
import MarkerContent from './MarkerContent'
import GlobalStyle from './GlobalStyle'
import preventGoogleMapFont from '../../utils/preventGoogleMapFont'

function Map({ lat, lng, postalCode, googleMapsKey, ...rest }) {
  useEffect(() => {
    preventGoogleMapFont()
  }, [])

  return (
    <Box fill {...rest}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: googleMapsKey }}
        center={centeredMarker(lat, lng)}
        defaultZoom={16}
        options={() => ({
          disableDefaultUI: true,
          draggable: false,
        })}
      >
        <MarkerBox lat={lat} lng={lng}>
          <MarkerContent postalCode={postalCode} />
        </MarkerBox>
      </GoogleMapReact>
      <GlobalStyle />
    </Box>
  )
}

function centeredMarker(lat, lng) {
  return { lat: lat + 0.0015, lng }
}

const requiredNumber = PropTypes.number.isRequired
const requiredString = PropTypes.string.isRequired
Map.propTypes = {
  lat: requiredNumber,
  lng: requiredNumber,
  postalCode: requiredString,
  googleMapsKey: requiredString,
}

export default Map
