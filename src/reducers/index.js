import { combineReducers } from 'redux'
import {
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
  USER_LOCATION_REQUEST,
  USER_LOCATION_FAILUIRE,
  SELECT_RESULT,
} from '../actions'

function loading(state = false, action) {
  switch (action.type) {
    case SEARCH_REQUEST:
    case USER_LOCATION_REQUEST:
      return true

    case SEARCH_SUCCESS:
    case SEARCH_FAILURE:
    case USER_LOCATION_FAILUIRE:
      return false

    default:
      return state
  }
}

function error(state = null, action) {
  switch (action.type) {
    case SEARCH_FAILURE:
    case USER_LOCATION_FAILUIRE:
      return action.message

    case SEARCH_SUCCESS:
      return null

    default:
      return state
  }
}

function redirectTo(state = null, action) {
  switch (action.type) {
    case SELECT_RESULT:
    case SEARCH_FAILURE:
      return action.redirectTo

    default:
      return state
  }
}

function results(state = [], action) {
  switch (action.type) {
    case SEARCH_SUCCESS:
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
