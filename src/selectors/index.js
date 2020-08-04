export function getLoading(state) {
  return state.loading
}

export function getError(state) {
  return state.error
}

export function getRedirectTo(state) {
  return state.redirectTo
}

export function getResultsAddresses(state) {
  return state.results.map((result) => result.address)
}

export function getSelectedResult(state) {
  return state.selectedResult
}

export function getSelectedAddress(state) {
  if (state.selectedResult) return state.selectedResult.address
}
