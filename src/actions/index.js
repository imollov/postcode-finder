import axios from 'axios'

export const SET_LOADING = 'SET_LOADING'
export const SET_ERROR = 'SET_ERROR'
export const SELECT_RESULT = 'SELECT_RESULT'
export const RECEIVE_RESULTS = 'RECEIVE_RESULTS'

export function setLoading(bool) {
  return {
    type: SET_LOADING,
    loading: bool,
  }
}

export function setError(message) {
  return {
    type: SET_ERROR,
    error: message,
  }
}

export function selectResult(address) {
  return async (dispatch, getState) => {
    dispatch({
      type: SELECT_RESULT,
      result: getState().results.find((r) => r.address === address),
    })
  }
}

export function receiveResults(data) {
  return {
    type: RECEIVE_RESULTS,
    items: data.results
      .filter((r) =>
        r.address_components.some((a) => a.types.includes('postal_code')),
      )
      .map((r) => ({
        id: r.place_id,
        address: r.formatted_address,
        location: r.geometry.location,
        postalCode: r.address_components.find((a) =>
          a.types.includes('postal_code'),
        )['short_name'],
      })),
  }
}

export function search(params) {
  return async (dispatch) => {
    dispatch(setLoading(true))
    try {
      const { data } = await axios.get(
        'https://maps.googleapis.com/maps/api/geocode/json',
        {
          params: {
            ...params,
            key: process.env.REACT_APP_API_KEY,
          },
        },
      )
      dispatch(receiveResults(data))
    } catch (e) {
      dispatch(setError('Something went wrong'))
    }
  }
}

export function searchAndSelectFirst(params) {
  return async (dispatch, getState) => {
    await dispatch(search(params))
    const firstResult = getState().results.find((r) => r)
    return dispatch(selectResult(firstResult.address))
  }
}
