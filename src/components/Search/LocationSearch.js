import React, { useContext, useEffect } from 'react'
import LocateButton from './LocateButton'

import { GlobalContext } from '../../context/GlobalState'

export default () => {
  const { searchByCoords, setError, setLoading } = useContext(GlobalContext)

  const locateButtonRef = React.createRef()

  useEffect(() => {
    const locationRef = locateButtonRef.current
    locationRef.onPositionSuccess = ({ coords }) =>
      searchByCoords(coords.latitude, coords.longitude)
    locationRef.onPositionError = ({ message }) => {
      setError(message)
    }
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

  return <LocateButton onClick={handleClick} ref={locateButtonRef} />
}
