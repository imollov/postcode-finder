import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { geolocated } from 'react-geolocated'
import LocateButton from '../components/LocateButton'
import { getPlacesAndSelectFirst, setLoading, setError } from '../actions'

const GeoLocatedButton = geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  suppressLocationOnMount: true,
})(LocateButton)

const PositionErrorCodes = {
  1: 'PERMISSION_DENIED',
  2: 'POSITION_UNAVAILABLE',
  3: 'TIMEOUT',
}

const locationErrorMessage = (code) =>
  PositionErrorCodes[code] === 'PERMISSION_DENIED'
    ? 'Location service must be allowed'
    : 'Location service error'

const GeoLocationSearch = (props) => {
  const dispatch = useDispatch()
  const geoLocatedButtonRef = React.createRef()

  useEffect(() => {
    geoLocatedButtonRef.current.onPositionSuccess = ({
      coords: { latitude, longitude },
    }) =>
      dispatch(getPlacesAndSelectFirst({ latlng: `${latitude},${longitude}` }))

    geoLocatedButtonRef.current.onPositionError = ({ code }) =>
      dispatch(setError(locationErrorMessage(code)))
  }, [geoLocatedButtonRef, dispatch])

  const handleClick = () => {
    dispatch(setLoading(true))
    geoLocatedButtonRef.current.getLocation()
  }

  return (
    <GeoLocatedButton
      onClick={handleClick}
      ref={geoLocatedButtonRef}
      {...props}
    />
  )
}

export default GeoLocationSearch
