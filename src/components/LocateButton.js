import React from 'react'
import PropTypes from 'prop-types'
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

LocateButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  isGeolocationAvailable: PropTypes.bool.isRequired,
}

export default LocateButton
