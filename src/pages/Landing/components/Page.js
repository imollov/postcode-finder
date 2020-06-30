import React from 'react'
import Layout from '../../../components/Layout'
import LoadingBar from '../../../components/LoadingBar'
import Content from './Content'

const Page = () => (
  <Layout>
    <LoadingBar />
    <Content />
  </Layout>
)

export default React.memo(Page)
