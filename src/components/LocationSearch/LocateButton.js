import React from 'react'
import { geolocated } from 'react-geolocated'
import { Button } from 'grommet'
import { Waypoint } from 'grommet-icons'

const LocateButton = ({ onClick, isGeolocationAvailable }) => (
  <Button
    onClick={onClick}
    disabled={!isGeolocationAvailable}
    a11yTitle="Locate me"
    icon={<Waypoint color="accent" />}
  />
)

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  suppressLocationOnMount: true,
})(LocateButton)
