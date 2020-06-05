import React from 'react'
import { Box, Heading, Text } from 'grommet'

const MarkerContent = ({ postalCode }) => (
  <Box>
    <Text size="small" color="accent">
      Postal Code
    </Text>
    <Heading color="accent">{postalCode}</Heading>
  </Box>
)

export default MarkerContent
