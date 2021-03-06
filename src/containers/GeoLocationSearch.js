import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { geolocated } from 'react-geolocated'

import LocateButton from '../components/LocateButton'
import geoLocationErrorMessage from '../utils/geoLocationErrorMessage'
import {
  userLocationRequest,
  userLocationSuccess,
  userLocationFailure,
} from '../actions'

function GeoLocationSearch(props) {
  const dispatch = useDispatch()
  const geoLocatedButtonRef = React.createRef()

  useEffect(() => {
    geoLocatedButtonRef.current.onPositionSuccess = ({ coords }) =>
      dispatch(userLocationSuccess(coords))

    geoLocatedButtonRef.current.onPositionError = ({ code }) =>
      dispatch(userLocationFailure(geoLocationErrorMessage(code)))
  }, [geoLocatedButtonRef, dispatch])

  function handleClick() {
    dispatch(userLocationRequest())
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

const GeoLocatedButton = geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  suppressLocationOnMount: true,
})(LocateButton)

export default GeoLocationSearch
