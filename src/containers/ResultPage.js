import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Box, Header as HeaderBox, ResponsiveContext } from 'grommet'

import Logo from '../components/Logo'
import AddressSearch from './AddressSearch'
import GeoLocationSearch from './GeoLocationSearch'
import ResultMap from './ResultMap'

const ResultPage = () => {
  const selectedPlace = useSelector((s) => s.selectedPlace)

  const size = useContext(ResponsiveContext)
  const isSmall = size === 'small'

  return !selectedPlace ? (
    <Redirect to="/" />
  ) : (
    <>
      <HeaderBox justify="start" direction={isSmall ? 'column' : 'row'}>
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
      </HeaderBox>
      <ResultMap />
    </>
  )
}

export default ResultPage
