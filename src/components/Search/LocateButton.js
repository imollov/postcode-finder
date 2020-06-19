import React from 'react'
import { withRouter } from 'react-router-dom'
import { Button } from 'grommet'
import { Waypoint } from 'grommet-icons'

const LocateButton = () => {
  return <Button a11yTitle="Locate me" icon={<Waypoint color="accent" />} />
}

export default withRouter(LocateButton)
