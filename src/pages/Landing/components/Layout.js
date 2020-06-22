import React from 'react'
import { Box } from 'grommet'

import Layout from '../../../components/Layout'
import Spinner from '../../../components/Spinner'

export default (props) => {
  return (
    <Layout fill background="brand">
      <Box height="4px">
        <Spinner />
      </Box>
      <Box flex align="center" margin={{ top: 'xlarge' }} {...props} />
    </Layout>
  )
}
