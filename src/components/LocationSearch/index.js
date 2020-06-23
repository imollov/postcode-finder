import React, { useContext, useEffect } from 'react'
import LocateButton from './LocateButton'

import { GlobalContext } from '../../context/GlobalState'

const PositionErrorCodes = {
  1: 'PERMISSION_DENIED',
  2: 'POSITION_UNAVAILABLE',
  3: 'TIMEOUT',
}

const locationErrorMessage = (code) =>
  PositionErrorCodes[code] === 'PERMISSION_DENIED'
    ? 'Location service must be allowed'
    : 'Location service error'

export default (props) => {
  const { searchByCoords, setError, setLoading } = useContext(GlobalContext)

  const locateButtonRef = React.createRef()

  useEffect(() => {
    const locationRef = locateButtonRef.current
    locationRef.onPositionSuccess = ({ coords }) =>
      searchByCoords(coords.latitude, coords.longitude)
    locationRef.onPositionError = ({ code }) =>
      setError(locationErrorMessage(code))
    return () => {
      locationRef.onPositionSuccess = null
      locationRef.onPositionError = null
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleClick = () => {
    setLoading()
    locateButtonRef.current.getLocation()
  }

  return <LocateButton onClick={handleClick} ref={locateButtonRef} {...props} />
}
