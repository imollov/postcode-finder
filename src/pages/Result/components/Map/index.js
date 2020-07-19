import React, { useEffect } from 'react'
import GoogleMapReact from 'google-map-react'
import { Box } from 'grommet'

import MarkerBox from './MarkerBox'
import MarkerContent from './MarkerContent'
import GlobalStyle from './GlobalStyle'
import preventGoogleMapFont from '../../../../utils/preventGoogleMapFont'
import { useGlobalResult } from '../../../../context/GlobalState'

const key = process.env.REACT_APP_API_KEY

const Map = (props) => {
  const result = useGlobalResult()

  useEffect(() => {
    preventGoogleMapFont()
  }, [])

  if (!result) return null

  const {
    location: { lat, lng },
    postalCode,
  } = result

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
