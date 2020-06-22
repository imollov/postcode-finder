import React, { createContext, useReducer } from 'react'
import axios from 'axios'
import AppReducer from './AppReducer'

const initialState = {
  suggestions: [],
  result: null,
  error: null,
  loading: false,
}

export const GlobalContext = createContext(initialState)

const key = process.env.REACT_APP_API_KEY

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  async function searchByAddress(address) {
    setLoading()
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
        type: 'SEARCH_BY_ADDRESS',
        payload: result.data.results,
      })
    } catch (error) {
      setError('Oops... Something went wrong :(')
    }
  }

  async function searchByCoords(lat, lng) {
    try {
      const result = await axios.get(
        'https://maps.googleapis.com/maps/api/geocode/json',
        {
          params: {
            latlng: `${lat},${lng}`,
            key,
          },
        },
      )

      dispatch({
        type: 'SEARCH_BY_COORDS',
        payload: result.data.results,
      })
    } catch (error) {
      setError('Oops... Something went wrong :(')
    }
  }

  function setResult(address) {
    dispatch({
      type: 'SET_RESULT',
      payload: address,
    })
  }

  function setLoading() {
    dispatch({
      type: 'SET_LOADING',
    })
  }

  function setError(message) {
    dispatch({
      type: 'SET_ERROR',
      payload: message,
    })
  }

  return (
    <GlobalContext.Provider
      value={{
        suggestions: state.suggestions,
        result: state.result,
        error: state.error,
        loading: state.loading,
        searchByAddress,
        searchByCoords,
        setResult,
        setError,
        setLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
