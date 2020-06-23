import React, { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'

import Layout from '../../components/Layout'
import Spinner from '../../components/Spinner'
import Header from './components/Header'
import Map from './components/Map'

import { GlobalContext } from '../../context/GlobalState'

const Result = () => {
  const { placeId } = useParams()
  const { searchById, result } = useContext(GlobalContext)

  useEffect(() => {
    if (result && placeId === result.id) return
    searchById(placeId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [placeId])

  useEffect(() => {
    result && (document.title = `${result.address} – PostcodeFinder`)
  }, [result])

  return (
    <Layout>
      <Spinner />
      <Header />
      {result && <Map />}
    </Layout>
  )
}

export default Result
