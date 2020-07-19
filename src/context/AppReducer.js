export default (state, action) => {
  switch (action.type) {
    case 'SET_SUGGESTIONS':
      return {
        ...state,
        loading: false,
        error: null,
        suggestions: action.payload,
      }
    case 'SET_SUGGESTION_AS_RESULT':
      return {
        ...state,
        result: state.suggestions.find((s) => s.address === action.payload),
        suggestions: [],
      }
    case 'SET_FIRST_RESULT':
      return {
        ...state,
        loading: false,
        error: null,
        result: action.payload.find((s) => s),
      }
    case 'SET_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      }
    default:
      return state
  }
}
