import * as mutation from 'mutation-types'
import merchantsService from 'services/merchants'

export const getMerchants = (pageNumber, itemsPerPage) => {
  return async (dispatch) => {
    dispatch({ type: mutation.GET_MERCHANTS })

    try {
      const result = await merchantsService.getAll(pageNumber, itemsPerPage)

      dispatch({
        type: mutation.GET_MERCHANTS_SUCCESS,
        payload: result,
      })
    } catch (error) {
      dispatch({ type: mutation.GET_MERCHANTS_FAILURE })
    }
  }
}

export const getMerchantById = (id) => {
  return async (dispatch) => {
    dispatch({ type: mutation.GET_MERCHANT_BY_ID })

    try {
      const result = await merchantsService.getById(id)

      dispatch({
        type: mutation.GET_MERCHANT_BY_ID_SUCCESS,
        payload: result,
      })
    } catch (error) {
      dispatch({ type: mutation.GET_MERCHANT_BY_ID_FAILURE })
    }
  }
}

export const addMerchant = (merchant) => {
  return async (dispatch) => {
    dispatch({ type: mutation.ADD_MERCHANT })

    try {
      const result = await merchantsService.addMerchant(merchant)

      dispatch({
        type: mutation.ADD_MERCHANT_SUCCESS,
        payload: result,
      })
    } catch (error) {
      dispatch({ type: mutation.ADD_MERCHANT_FAILURE })
    }
  }
}

export const editMerchant = (id, merchant) => {
  return async (dispatch) => {
    dispatch({ type: mutation.EDIT_MERCHANT })

    try {
      const result = await merchantsService.editMerchant(id, merchant)

      dispatch({
        type: mutation.EDIT_MERCHANT_SUCCESS,
        payload: result,
      })
    } catch (error) {
      dispatch({ type: mutation.EDIT_MERCHANT_FAILURE })
    }
  }
}

export const deleteMerchant = (id) => {
  return async (dispatch) => {
    dispatch({ type: mutation.DELETE_MERCHANT })

    try {
      await merchantsService.deleteMerchant(id)

      dispatch({
        type: mutation.DELETE_MERCHANT_SUCCESS,
        payload: id,
      })
    } catch (error) {
      dispatch({ type: mutation.DELETE_MERCHANT_FAILURE })
    }
  }
}
