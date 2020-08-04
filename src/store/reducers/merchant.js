import * as mutation from 'mutation-types'

const initialState = {
  merchants: [],
  selectedMerchant: {},
  currentPage: 1,
  numberOfPages: 0,
  loading: true,
  hasError: false,
}

const success = {
  loading: false,
  hasError: false,
}

const error = {
  loading: false,
  hasError: true,
}

const merchant = (state = initialState, action) => {
  switch (action.type) {
    case mutation.GET_MERCHANTS:
      return {
        ...state,
        loading: true,
      }
    case mutation.GET_MERCHANTS_SUCCESS:
      return {
        ...state,
        ...success,
        merchants: action.payload,
        currentPage: action.currentPage,
        numberOfPages: action.numberOfPages,
      }
    case mutation.GET_MERCHANTS_FAILURE:
      return {
        ...state,
        ...error,
      }
    case mutation.GET_MERCHANT_BY_ID:
      return {
        ...state,
        loading: true,
      }
    case mutation.GET_MERCHANT_BY_ID_SUCCESS:
      return {
        ...state,
        ...success,
        selectedMerchant: action.payload,
      }
    case mutation.GET_MERCHANT_BY_ID_FAILURE:
      return {
        ...state,
        ...error,
      }
    case mutation.EDIT_MERCHANT:
      return {
        ...state,
        loading: true,
      }
    case mutation.EDIT_MERCHANT_SUCCESS:
      const foundIndex = state.merchants.findIndex(
        (merchant) => merchant.id === action.payload.id
      )
      state.merchants[foundIndex] = action.payload
      
      return {
        ...state,
        ...success,
        merchants: [...state.merchants],
      }
    case mutation.EDIT_MERCHANT_FAILURE:
      return {
        ...state,
        ...error,
      }
    case mutation.ADD_MERCHANT:
      return {
        ...state,
        loading: true,
      }
    case mutation.ADD_MERCHANT_SUCCESS:
      return {
        ...state,
        ...success,
        merchants: [...state.merchants, action.payload],
      }
    case mutation.ADD_MERCHANT_FAILURE:
      return {
        ...state,
        ...error,
      }
    case mutation.DELETE_MERCHANT:
      return {
        ...state,
        loading: true,
      }
    case mutation.DELETE_MERCHANT_SUCCESS:
      return {
        ...state,
        ...success,
        merchants: state.merchants.filter(
          (merchant) => merchant.id !== action.payload
        ),
      }
    case mutation.DELETE_MERCHANT_FAILURE:
      return {
        ...state,
        ...error,
      }
    default:
      return state
  }
}

export default merchant
