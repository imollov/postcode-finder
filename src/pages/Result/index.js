import React, { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'

import Page from './components/Page'

import {
  useGlobalActionsContext,
  useGlobalResultContext,
} from '../../context/GlobalState'

const Result = () => {
  const history = useHistory()
  const { placeId } = useParams()
  const { searchById } = useGlobalActionsContext()
  const result = useGlobalResultContext()

  useEffect(() => {
    if (result && result.id === placeId) return
    placeId && searchById(placeId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [placeId])

  useEffect(() => {
    if (result) {
      document.title = `${result.address} – PostcodeFinder`

      if (result.id !== placeId) {
        history.push(`/r/${result.id}`)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result])

  return <Page />
}

export default Result
