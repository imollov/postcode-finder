import React from 'react'
import LocateButton from './LocateButton'

// const PositionErrorCodes = {
//   1: 'PERMISSION_DENIED',
//   2: 'POSITION_UNAVAILABLE',
//   3: 'TIMEOUT',
// }

// const locationErrorMessage = (code) =>
//   PositionErrorCodes[code] === 'PERMISSION_DENIED'
//     ? 'Location service must be allowed'
//     : 'Location service error'

const LocationSearch = (props) => {
  const locateButtonRef = React.createRef()

  // useEffect(() => {
  //   locateButtonRef.current.onPositionSuccess = ({ coords }) =>
  //     searchByCoords(coords.latitude, coords.longitude)

  //   locateButtonRef.current.onPositionError = ({ code }) =>
  //     setError(locationErrorMessage(code))
  // }, [locateButtonRef, searchByCoords, setError])

  const handleClick = () => {
    // setLoading()
    locateButtonRef.current.getLocation()
  }

  return <LocateButton onClick={handleClick} ref={locateButtonRef} {...props} />
}

export default LocationSearch
