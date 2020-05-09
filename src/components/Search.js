import React from 'react'
import { Box, TextInput, Button } from 'grommet'
import { FormSearch, Waypoint } from 'grommet-icons'

export default (props) => (
  <Box direction="row" {...props}>
    <TextInput
      type="search"
      icon={<FormSearch />}
      placeholder="Search an address worldwide..."
      suggestions={['Example 1', 'Example 2']}
    />
    <Button a11yTitle="Locate me" icon={<Waypoint />} />
  </Box>
)
