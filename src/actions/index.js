import axios from 'axios'

export const SET_LOADING = 'SET_LOADING'
export const SET_ERROR = 'SET_ERROR'
export const SELECT_PLACE = 'SELECT_PLACE'
export const RECEIVE_PLACES = 'RECEIVE_PLACES'

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

export function selectPlace(address) {
  return {
    type: SELECT_PLACE,
    address,
  }
}

export function receivePlaces(data) {
  return {
    type: RECEIVE_PLACES,
    items: data.results
      .filter((r) =>
        r.address_components.some((a) => a.types.includes('postal_code')),
      )
      .map((r) => ({
        address: r.formatted_address,
        location: r.geometry.location,
        postalCode: r.address_components.find((a) =>
          a.types.includes('postal_code'),
        )['short_name'],
      })),
  }
}

export function getPlaces(args) {
  return async (dispatch) => {
    dispatch(setLoading(true))
    try {
      const { data } = await axios.get(
        'https://maps.googleapis.com/maps/api/geocode/json',
        {
          params: {
            ...args,
            key: process.env.REACT_APP_API_KEY,
          },
        },
      )
      dispatch(receivePlaces(data))
    } catch (e) {
      dispatch(setError('Something went wrong'))
    }
  }
}

export function getPlacesAndSelectFirst(args) {
  return async (dispatch, getState) => {
    dispatch(getPlaces(args)).then(() => {
      const topResult = getState().places.find((p) => p)
      return dispatch(selectPlace(topResult.address))
    })
  }
}
