import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'
import axios from 'axios'

const initialState = {
  suggestions: [],
  result: null,
  error: null,
}

export const GlobalContext = createContext(initialState)

const key = process.env.REACT_APP_API_KEY

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  async function search(address) {
    try {
      const result = await axios.get(
        'https://maps.googleapis.com/maps/api/geocode/json',
        {
          params: {
            address,
            key,
          },
        },
      )

      dispatch({
        type: 'SEARCH',
        payload: result.data.results,
      })
    } catch (error) {
      dispatch({
        type: 'SEARCH_ERROR',
        payload: 'Search service error.',
      })
    }
  }

  function setResult(address) {
    dispatch({
      type: 'SET_RESULT',
      payload: address,
    })
  }

  return (
    <GlobalContext.Provider
      value={{
        suggestions: state.suggestions,
        result: state.result,
        error: state.error,
        loading: state.loading,
        search,
        setResult,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
