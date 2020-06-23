import React from 'react'

import Layout from '../../components/Layout'
import Spinner from '../../components/Spinner'
import Content from './components/Content'

export default () => {
  return (
    <Layout>
      <Spinner />
      <Content />
    </Layout>
  )
}
