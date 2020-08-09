import axios from 'axios'

export const SEARCH_REQUEST = 'SEARCH_REQUEST'
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS'
export const SEARCH_FAILURE = 'SEARCH_FAILURE'
export const USER_LOCATION_REQUEST = 'USER_LOCATION_REQUEST'
export const USER_LOCATION_FAILUIRE = 'USER_LOCATION_FAILUIRE'
export const SELECT_RESULT = 'SELECT_RESULT'

export function searchRequest() {
  return {
    type: SEARCH_REQUEST,
  }
}

export function searchFailure(message) {
  return {
    type: SEARCH_FAILURE,
    message,
  }
}

export function userLocationRequest() {
  return {
    type: USER_LOCATION_REQUEST,
  }
}

export function userLocationSuccess({ latitude, longitude }) {
  return async (dispatch) => {
    dispatch(searchAndSelectFirst({ latlng: `${latitude},${longitude}` }))
  }
}

export function userLocationFailure(message) {
  return {
    type: USER_LOCATION_FAILUIRE,
    message,
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

export function searchSuccess(data) {
  return {
    type: SEARCH_SUCCESS,
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
    dispatch(searchRequest())
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
      dispatch(searchSuccess(data))
    } catch (e) {
      dispatch(searchFailure('Something went wrong'))
    }
  }
}

export function searchAndSelectFirst(params) {
  return async (dispatch, getState) => {
    await dispatch(search(params))
    const result = getState().results.find((r) => r)
    if (result) {
      return dispatch(selectResult(result.address))
    }
  }
}
