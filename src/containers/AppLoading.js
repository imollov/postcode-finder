import React from 'react'
import { useSelector } from 'react-redux'
import LoadingBar from '../components/LoadingBar'

function AppLoading(props) {
  const loading = useSelector((s) => s.loading)

  return <LoadingBar loading={loading} {...props} />
}

export default AppLoading
