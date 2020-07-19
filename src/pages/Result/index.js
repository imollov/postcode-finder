import React, { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'

import Page from './components/Page'
import { useGlobalActions, useGlobalResult } from '../../context/GlobalState'

const Result = () => {
  const history = useHistory()
  const { placeId } = useParams()
  const { searchById } = useGlobalActions()
  const result = useGlobalResult()

  useEffect(() => {
    if (!result || result.id !== placeId) searchById(placeId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [placeId])

  useEffect(() => {
    if (result) {
      document.title = `${result.address} – PostcodeFinder`

      if (result.id !== placeId) {
        history.push(`/r/${result.id}`)
      }
    }
  }, [result, placeId, history])

  return <Page />
}

export default Result
