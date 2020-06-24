import { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'

import {
  useGlobalActionsContext,
  useGlobalResultContext,
} from '../context/GlobalState'

const useResult = () => {
  const history = useHistory()
  const { placeId } = useParams()
  const { searchById } = useGlobalActionsContext()
  const result = useGlobalResultContext()

  useEffect(() => {
    if (result && placeId === result.id) return
    placeId && searchById(placeId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [placeId])

  useEffect(() => {
    if (result) {
      document.title = `${result.address} – PostcodeFinder`
      history.push(`/r/${result.id}`)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result])

  return result
}

export default useResult
