import React, { useEffect } from 'react'
import GoogleMapReact from 'google-map-react'
import { Box } from 'grommet'

import MarkerBox from './MarkerBox'
import MarkerContent from './MarkerContent'
import GlobalStyle from './GlobalStyle'
import preventGoogleMapFont from '../../utils/preventGoogleMapFont'

const key = process.env.REACT_APP_API_KEY

const lat = 42.6303525
const lng = 23.3691035
const postalCode = '1715'

const Map = (props) => {
  useEffect(() => {
    preventGoogleMapFont()
  }, [])

  return (
    <Box fill {...props}>
      <GoogleMapReact
        bootstrapURLKeys={{ key }}
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
