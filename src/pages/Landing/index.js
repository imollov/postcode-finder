import React from 'react'
import { Box } from 'grommet'

import Layout from '../../components/Layout'
import Spinner from '../../components/Spinner'
import Content from './components/Content'

export default () => {
  return (
    <Layout>
      <Box height="4px">
        <Spinner />
      </Box>
      <Content />
    </Layout>
  )
}
