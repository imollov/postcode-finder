import React from 'react'
import { Button } from 'grommet'
import { Waypoint } from 'grommet-icons'

const LocateButton = ({ onClick, isGeolocationAvailable, ...rest }) => (
  <Button
    onClick={onClick}
    disabled={!isGeolocationAvailable}
    a11yTitle="Locate me"
    icon={<Waypoint color="accent" />}
    {...rest}
  />
)

export default LocateButton
