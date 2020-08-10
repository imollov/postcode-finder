import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import * as actions from '../'

const mockAxios = new MockAdapter(axios)

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('actions', () => {
  it('creates an action to start user location request', () => {
    const expectedAction = {
      type: actions.USER_LOCATION_REQUEST,
    }
    expect(actions.userLocationRequest()).toEqual(expectedAction)
  })
})

describe('async actions', () => {
  afterEach(() => {
    mockAxios.restore()
  })

  it('creates SEARCH_SUCCESS when search request is done', async () => {
    mockAxios
      .onGet('https://maps.googleapis.com/maps/api/geocode/json')
      .reply(200, {
        results: [
          {
            address_components: [
              {
                short_name: '1111',
                types: ['postal_code'],
              },
            ],
            formatted_address: 'Fake address',
            geometry: {
              location: {
                lat: 44.44,
                lng: 22.22,
              },
            },
            place_id: 'fake-id',
          },
        ],
      })

    const expectedActions = [
      { type: actions.SEARCH_REQUEST },
      {
        type: actions.SEARCH_SUCCESS,
        items: [
          {
            id: 'fake-id',
            address: 'Fake address',
            location: {
              lat: 44.44,
              lng: 22.22,
            },
            postalCode: '1111',
          },
        ],
      },
    ]
    const store = mockStore({ results: [] })

    await store.dispatch(actions.search())

    expect(store.getActions()).toEqual(expectedActions)
  })

  it('creates SELECT_RESULT from an address', async () => {
    const expectedActions = [
      {
        type: actions.SELECT_RESULT,
        result: { id: 'fake-id', address: 'Fake address' },
        redirectTo: '/fake-id',
      },
    ]
    const store = mockStore({
      results: [{ id: 'fake-id', address: 'Fake address' }],
    })

    await store.dispatch(actions.selectResult('Fake address'))

    expect(store.getActions()).toEqual(expectedActions)
  })

  // it('calls search and then select the first result', async () => {
  // const store = mockStore({
  //   results: [{ address: 'Fake address' }],
  // })

  // await store.dispatch(actions.searchAndSelectFirst(0))

  // expect(spySearch).toBeCalledWith(0)
  // expect(spySelectResult).toBeCalledWith('Fake address')
  // })
})
