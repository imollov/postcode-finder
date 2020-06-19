import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../../context/GlobalState'

import LocateButton from './LocateButton'

export default () => {
  const { searchByCoords } = useContext(GlobalContext)

  const locateButtonRef = React.createRef()

  useEffect(() => {
    const locationRef = locateButtonRef.current

    locationRef.onPositionSuccess = (pos) =>
      // todo: set loading
      searchByCoords(pos.coords.latitude, pos.coords.longitude)

    locationRef.onPositionError = (err) => {
      // todo: set error
      console.log(err)
    }

    return () => {
      locationRef.onPositionSuccess = null
      locationRef.onPositionError = null
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleClick = () => locateButtonRef.current.getLocation()

  return <LocateButton onClick={handleClick} ref={locateButtonRef} />
}
