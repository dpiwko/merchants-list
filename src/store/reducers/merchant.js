import * as mutation from 'mutation-types'

const initialState = {
  merchants: [],
  selectedMerchant: {},
}

const reducer = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case mutation.GET_MERCHANTS:
      return {
        ...state,
        merchants: action.payload,
      }
    case mutation.GET_MERCHANT_BY_ID:
      return {
        ...state,
        selectedMerchant: action.payload,
      }
    case mutation.EDIT_MERCHANT:
      return {
        ...state,
      }
    case mutation.ADD_MERCHANT:
      return {
        ...state,
      }
    case mutation.DELETE_MERCHANT:
      return {
        ...state,
        merchants: action.payload,
      }
    default:
      return state
  }
}

export default reducer
