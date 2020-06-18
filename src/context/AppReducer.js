export default (state, action) => {
  switch (action.type) {
    case 'SEARCH':
      return {
        ...state,
        suggestions: action.payload.map((s) => ({
          address: s.formatted_address,
          location: s.geometry.location,
          id: s.place_id,
        })),
      }
    case 'SET_RESULT':
      return {
        ...state,
        result: state.suggestions.filter((s) => s.address === s.payload),
      }
    case 'SEARCH_ERROR':
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
  }
}
