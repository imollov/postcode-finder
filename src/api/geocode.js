import axios from 'axios'

const url = 'https://maps.googleapis.com/maps/api/geocode/json'

const key = process.env.REACT_APP_API_KEY

export const searchByAddress = (address) =>
  axios.get(url, { params: { address, key } })

export const searchByCoords = (lat, lng) =>
  axios.get(url, { params: { latlng: `${lat},${lng}`, key } })

export const searchById = (id) =>
  axios.get(url, { params: { place_id: id, key } })
