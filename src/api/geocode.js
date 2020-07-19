import axios from 'axios'

const url = 'https://maps.googleapis.com/maps/api/geocode/json'
const key = process.env.REACT_APP_API_KEY

const hasPostalCode = (addressComponent) =>
  addressComponent.types.includes('postal_code')

const getPostalCode = (result) =>
  result.address_components.find(hasPostalCode)['short_name']

const transformResult = (result) => ({
  id: result.place_id,
  address: result.formatted_address,
  location: result.geometry.location,
  postalCode: getPostalCode(result),
})

const postalCodeResponse = (data) =>
  data.results
    .filter((r) => r.address_components.some(hasPostalCode))
    .map(transformResult)

export const searchByAddress = async (address) => {
  const { data } = await axios.get(url, { params: { address, key } })
  return postalCodeResponse(data)
}

export const searchByCoords = async (lat, lng) => {
  const { data } = await axios.get(url, {
    params: { latlng: `${lat},${lng}`, key },
  })
  return postalCodeResponse(data)
}

export const searchById = async (id) => {
  const { data } = await axios.get(url, { params: { place_id: id, key } })
  return postalCodeResponse(data)
}
