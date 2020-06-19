import React from 'react'
import { Box } from 'grommet'
import Layout from '../../../components/Layout'

export default (props) => {
  return (
    <Layout fill background="brand">
      <Box flex align="center" margin={{ top: 'xlarge' }} {...props} />
    </Layout>
  )
}
