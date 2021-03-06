import React from 'react'
import PropTypes from 'prop-types'
import { Box, Heading, Text } from 'grommet'

function MarkerContent({ postalCode }) {
  return (
    <Box>
      <Text size="small" color="brand">
        Postal Code
      </Text>
      <Heading level="2" color="brand">
        {postalCode}
      </Heading>
    </Box>
  )
}

MarkerContent.propTypes = {
  postalCode: PropTypes.string.isRequired,
}

export default MarkerContent
