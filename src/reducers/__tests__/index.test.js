import reducer from '../'
import * as actions from '../../actions'

const initialState = {
  loading: false,
  error: null,
  redirectTo: null,
  results: [],
  selectedResult: null,
}

describe('reducer', () => {
  it('returns initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('handles SEARCH_REQUEST', () => {
    expect(
      reducer(initialState, {
        type: actions.SEARCH_REQUEST,
      }),
    ).toEqual({
      ...initialState,
      loading: true,
    })
  })

  it('handles SEARCH_SUCCESS', () => {
    expect(
      reducer(
        { ...initialState, loading: true, error: 'Test' },
        {
          type: actions.SEARCH_SUCCESS,
          items: [{}],
        },
      ),
    ).toEqual({
      ...initialState,
      results: [{}],
    })

    expect(
      reducer(
        { ...initialState, results: [{ id: 'test-id' }] },
        {
          type: actions.SEARCH_SUCCESS,
          items: [{}],
        },
      ),
    ).toEqual({
      ...initialState,
      results: [{}],
    })
  })

  it('handles SEARCH_FAILURE', () => {
    expect(
      reducer(
        { ...initialState, loading: true, results: [{}] },
        {
          type: actions.SEARCH_FAILURE,
          message: '',
          redirectTo: '',
        },
      ),
    ).toEqual({
      ...initialState,
      results: [{}],
      error: '',
      redirectTo: '',
    })
  })

  it('handles USER_LOCATION_REQUEST', () => {
    expect(
      reducer(initialState, {
        type: actions.USER_LOCATION_REQUEST,
      }),
    ).toEqual({
      ...initialState,
      loading: true,
    })
  })

  it('handles USER_LOCATION_FAILUIRE', () => {
    expect(
      reducer(
        { ...initialState, loading: true },
        {
          type: actions.USER_LOCATION_FAILUIRE,
          message: '',
        },
      ),
    ).toEqual({
      ...initialState,
      error: '',
    })
  })

  it('handles SELECT_RESULT', () => {
    expect(
      reducer(initialState, {
        type: actions.SELECT_RESULT,
        result: {},
        redirectTo: '',
      }),
    ).toEqual({
      ...initialState,
      selectedResult: {},
      redirectTo: '',
    })

    expect(
      reducer(
        { ...initialState, selectedResult: { id: 'test-id' } },
        {
          type: actions.SELECT_RESULT,
          result: {},
          redirectTo: '',
        },
      ),
    ).toEqual({
      ...initialState,
      selectedResult: {},
      redirectTo: '',
    })
  })
})
