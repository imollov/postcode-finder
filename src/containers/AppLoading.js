import React from 'react'
import { useSelector } from 'react-redux'
import LoadingBar from '../components/LoadingBar'
import { getLoading } from '../selectors'

function AppLoading(props) {
  const loading = useSelector(getLoading)

  return <LoadingBar loading={loading} {...props} />
}

export default AppLoading
