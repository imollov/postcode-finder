import React from 'react'
import { geolocated } from 'react-geolocated'
import { Button } from 'grommet'
import { Waypoint } from 'grommet-icons'

const LocateButton = ({ onClick }) => (
  <Button
    onClick={onClick}
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
