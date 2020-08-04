import React, { useEffect } from 'react'
import GoogleMapReact from 'google-map-react'
import { Box } from 'grommet'

import MarkerBox from './MarkerBox'
import MarkerContent from './MarkerContent'
import GlobalStyle from './GlobalStyle'
import preventGoogleMapFont from '../../utils/preventGoogleMapFont'

const Map = ({ lat, lng, postalCode, googleMapsKey, ...rest }) => {
  useEffect(() => {
    preventGoogleMapFont()
  }, [])

  return (
    <Box fill {...rest}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: googleMapsKey }}
        center={{ lat: lat + 0.0015, lng }}
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

export default Map
