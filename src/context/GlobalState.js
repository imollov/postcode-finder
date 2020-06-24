import React, { createContext, useReducer, useContext, useMemo } from 'react'
import AppReducer from './AppReducer'
import * as GeoService from '../api/geocode'

const initialState = {
  suggestions: [],
  result: null,
  error: null,
  loading: false,
}

const GlobalActionsContext = createContext()
const GlobalResultContext = createContext(initialState.result)
const GlobalSuggestionsContext = createContext(initialState.suggestions)
const GlobalLoadingContext = createContext(initialState.loading)
const GlobalErrorContext = createContext(initialState.error)

const factoryUseContext = (name, context) => {
  return () => {
    const ctx = useContext(context)
    if (ctx === undefined) {
      throw new Error(
        `use${name}Context must be used withing a ${name}ContextProvider.`,
      )
    }
    return ctx
  }
}

export const useGlobalActionsContext = factoryUseContext(
  'GlobalActionsContext',
  GlobalActionsContext,
)
export const useGlobalResultContext = factoryUseContext(
  'GlobalResultContext',
  GlobalResultContext,
)
export const useGlobalSuggestionsContext = factoryUseContext(
  'GlobalSuggestionsContext',
  GlobalSuggestionsContext,
)
export const useGlobalLoadingContext = factoryUseContext(
  'GlobalLoadingContext',
  GlobalLoadingContext,
)
export const useGlobalErrorContext = factoryUseContext(
  'GlobalErrorContext',
  GlobalErrorContext,
)

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
      const result = await GeoService.searchByAddress(address)

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
      const result = await GeoService.searchByCoords(lat, lng)

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
      const result = await GeoService.searchById(id)

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

  const actions = useMemo(
    () => ({
      setLoading,
      setError,
      searchByAddress,
      searchByCoords,
      searchById,
      setResult,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )

  return (
    <GlobalActionsContext.Provider value={actions}>
      <GlobalResultContext.Provider value={state.result}>
        <GlobalSuggestionsContext.Provider value={state.suggestions}>
          <GlobalLoadingContext.Provider value={state.loading}>
            <GlobalErrorContext.Provider value={state.error}>
              {children}
            </GlobalErrorContext.Provider>
          </GlobalLoadingContext.Provider>
        </GlobalSuggestionsContext.Provider>
      </GlobalResultContext.Provider>
    </GlobalActionsContext.Provider>
  )
}
