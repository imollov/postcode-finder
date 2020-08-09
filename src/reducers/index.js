import { combineReducers } from 'redux'
import {
  USER_LOCATION_REQUEST,
  USER_LOCATION_FAILUIRE,
  SET_LOADING,
  SET_ERROR,
  SET_REDIRECT,
  SELECT_RESULT,
  RECEIVE_RESULTS,
} from '../actions'

function loading(state = false, action) {
  switch (action.type) {
    case SET_LOADING:
      return action.loading

    case USER_LOCATION_REQUEST:
      return true

    case SET_ERROR:
    case RECEIVE_RESULTS:
    case USER_LOCATION_FAILUIRE:
      return false

    default:
      return state
  }
}

function error(state = null, action) {
  switch (action.type) {
    case SET_ERROR:
      return action.error

    case USER_LOCATION_FAILUIRE:
      return action.message

    default:
      return state
  }
}

function redirectTo(state = null, action) {
  switch (action.type) {
    case SET_REDIRECT:
      return action.path

    case SELECT_RESULT:
      return `/${action.result.id}`

    default:
      return state
  }
}

function results(state = [], action) {
  switch (action.type) {
    case RECEIVE_RESULTS:
      return action.items

    case SELECT_RESULT:
      return []

    default:
      return state
  }
}

function selectedResult(state = null, action) {
  switch (action.type) {
    case SELECT_RESULT:
      return action.result

    default:
      return state
  }
}

export default combineReducers({
  loading,
  error,
  redirectTo,
  results,
  selectedResult,
})
