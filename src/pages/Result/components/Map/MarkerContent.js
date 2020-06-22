import React from 'react'
import { Box, Heading, Text } from 'grommet'

const MarkerContent = ({ postalCode }) => (
  <Box>
    <Text size="small" color="brand">
      Postal Code
    </Text>
    <Heading level="2" color="brand">
      {postalCode}
    </Heading>
  </Box>
)

export default MarkerContent
