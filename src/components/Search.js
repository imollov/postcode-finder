import React from 'react'
import { Box, TextInput, Button } from 'grommet'
import { FormSearch, Waypoint } from 'grommet-icons'

export default ({ value, suggestions, ...rest }) => (
  <Box direction="row" {...rest}>
    <TextInput
      value={value}
      type="search"
      icon={<FormSearch color="accent" />}
      placeholder="Search an address worldwide..."
      suggestions={suggestions}
    />
    <Button a11yTitle="Locate me" icon={<Waypoint color="accent" />} />
  </Box>
)
