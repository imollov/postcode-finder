import React from 'react'
import Layout from './components/Layout'
import Logo from '../../components/Logo'
import Search from '../../components/Search'

export default () => {
  return (
    <Layout>
      <Logo size="medium" color="accent" />
      <Search width="large" pad={{ horizontal: 'xlarge' }} />
    </Layout>
  )
}
