import React from 'react'
import Layout from '../../components/Layout'
import LoadingBar from '../../components/LoadingBar'
import Header from './components/Header'
import Map from './components/Map'

const Result = () => (
  <Layout>
    <LoadingBar />
    <Header />
    <Map />
  </Layout>
)

export default Result
