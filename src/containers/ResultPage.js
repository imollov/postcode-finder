import React, { useContext, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Box, Header, ResponsiveContext } from 'grommet'

import Logo from '../components/Logo'
import AddressSearch from './AddressSearch'
import GeoLocationSearch from './GeoLocationSearch'
import ResultMap from './ResultMap'
import { getPlacesAndSelectFirst } from '../actions'

const ResultPage = () => {
  const { placeId } = useParams()
  const selectedPlace = useSelector((s) => s.selectedPlace)

  const dispatch = useDispatch()

  useEffect(() => {
    if (!selectedPlace) {
      dispatch(getPlacesAndSelectFirst({ place_id: placeId }))
    }
  }, [placeId, selectedPlace, dispatch])

  const size = useContext(ResponsiveContext)
  const isSmall = size === 'small'

  return (
    <>
      <Header justify="start" direction={isSmall ? 'column' : 'row'}>
        <Box flex={false} pad={{ left: 'small' }}>
          <Logo size="small" color="accent" />
        </Box>
        <Box
          direction="row"
          fill="horizontal"
          width={{ max: 'large' }}
          pad={
            isSmall
              ? {
                  horizontal: 'large',
                  bottom: 'large',
                }
              : 'none'
          }
        >
          <AddressSearch />
          <GeoLocationSearch />
        </Box>
      </Header>
      <ResultMap />
    </>
  )
}

export default ResultPage
