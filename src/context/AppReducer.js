const hasPostalCode = (addressComponent) =>
  addressComponent.types.includes('postal_code')

const getPostalCode = (result) =>
  result.address_components.find(hasPostalCode)['short_name']

const transform = (result) => ({
  id: result.place_id,
  address: result.formatted_address,
  location: result.geometry.location,
  postalCode: getPostalCode(result),
})

export default (state, action) => {
  switch (action.type) {
    case 'GET_SUGGESTIONS':
      return {
        ...state,
        loading: false,
        error: null,
        suggestions: action.payload
          .filter((s) => s.address_components.some(hasPostalCode))
          .map(transform),
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
        result: action.payload
          .filter((s) => s.address_components.some(hasPostalCode))
          .map(transform)
          .find((s) => s),
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
