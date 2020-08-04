function geoLocationErrorMessage(code) {
  return ErrorCodes[code] === 'PERMISSION_DENIED'
    ? 'Location service must be allowed'
    : 'Location service error'
}

const ErrorCodes = {
  1: 'PERMISSION_DENIED',
  2: 'POSITION_UNAVAILABLE',
  3: 'TIMEOUT',
}

export default geoLocationErrorMessage
