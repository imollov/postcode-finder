import React, { useContext, useEffect } from 'react'
import GoogleMapReact from 'google-map-react'
import preventGoogleMapFont from '../../../../utils/preventGoogleMapFont'

import MarkerBox from './MarkerBox'
import MarkerContent from './MarkerContent'
import GlobalStyle from './GlobalStyle'

import { GlobalContext } from '../../../../context/GlobalState'

const key = process.env.REACT_APP_API_KEY

export default () => {
  const { result } = useContext(GlobalContext)

  const {
    location: { lat, lng },
    postalCode,
  } = result

  useEffect(() => {
    preventGoogleMapFont()
  }, [])

  return (
    <>
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
    </>
  )
}
