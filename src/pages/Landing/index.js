import React from 'react'
import Layout from './components/Layout'
import Logo from '../../components/Logo'
import Search from '../../components/Search'

const fakeSuggestions = ['Example 1', 'Example 2']

export default () => {
  return (
    <Layout>
      <Logo size="medium" color="accent" />
      <Search
        width="large"
        pad={{ horizontal: 'xlarge' }}
        suggestions={fakeSuggestions}
      />
    </Layout>
  )
}
