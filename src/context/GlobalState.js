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

  const setLoading = () => {
    dispatch({
      type: 'SET_LOADING',
    })
  }

  const setError = (message) => {
    dispatch({
      type: 'SET_ERROR',
      payload: message,
    })
  }

  const searchByAddress = async (address) => {
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
        type: 'GET_SUGGESTIONS',
        payload: result.data.results,
      })
    } catch (error) {
      setError('Oops... Something went wrong :(')
    }
  }

  const searchByCoords = async (lat, lng) => {
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
        type: 'SET_FIRST_RESULT',
        payload: result.data.results,
      })
    } catch (error) {
      setError('Oops... Something went wrong :(')
    }
  }

  const searchById = async (id) => {
    setLoading()
    try {
      const result = await axios.get(
        'https://maps.googleapis.com/maps/api/geocode/json',
        {
          params: {
            place_id: id,
            key,
          },
        },
      )

      dispatch({
        type: 'SET_FIRST_RESULT',
        payload: result.data.results,
      })
    } catch (error) {
      setError('Oops... Something went wrong :(')
    }
  }

  const setResult = (address) => {
    dispatch({
      type: 'SET_SUGGESTION_AS_RESULT',
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
        searchByAddress,
        searchByCoords,
        searchById,
        setResult,
        setError,
        setLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}
