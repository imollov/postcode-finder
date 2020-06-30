import React from 'react'
import Layout from '../../../components/Layout'
import LoadingBar from '../../../components/LoadingBar'
import Header from './Header'
import Map from './Map'

const Page = () => (
  <Layout>
    <LoadingBar />
    <Header />
    <Map />
  </Layout>
)

export default React.memo(Page)
