import { combineReducers } from 'redux'
import {
  SET_LOADING,
  SET_ERROR,
  SELECT_PLACE,
  RECEIVE_PLACES,
} from '../actions'

function loading(state = false, action) {
  switch (action.type) {
    case SET_LOADING:
      return action.loading

    case SET_ERROR:
    case RECEIVE_PLACES:
      return false

    default:
      return state
  }
}

function error(state = null, action) {
  switch (action.type) {
    case SET_ERROR:
      return action.error

    default:
      return state
  }
}

function redirectTo(state = null, action) {
  switch (action.type) {
    case SELECT_PLACE:
      return `/${action.place.id}`

    default:
      return state
  }
}

function places(state = [], action) {
  switch (action.type) {
    case RECEIVE_PLACES:
      return action.items

    case SELECT_PLACE:
      return []

    default:
      return state
  }
}

function selectedPlace(state = null, action) {
  switch (action.type) {
    case SELECT_PLACE:
      return action.place

    default:
      return state
  }
}

export default combineReducers({
  loading,
  error,
  redirectTo,
  places,
  selectedPlace,
})
