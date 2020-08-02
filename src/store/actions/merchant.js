import * as mutation from 'mutation-types'
import merchantsService from 'services/merchants'

export const getMerchants = (pageNumber, itemsPerPage) => {
  return async (dispatch) => {
    const result = await merchantsService.getAll(
      pageNumber,
      itemsPerPage
    )
  
    dispatch({
      type: mutation.GET_MERCHANTS,
      payload: result,
    })
  }
}

export const getMerchantById = (id) => {
  return async (dispatch) => {
    const result = await merchantsService.getById(id)
    
    dispatch({
      type: mutation.GET_MERCHANT_BY_ID,
      payload: result,
    })
  }
}

export const addMerchant = (merchant) => {
  return (dispatch) => {
    const result = merchantsService.addMerchant(merchant)
    
    dispatch({
      type: mutation.ADD_MERCHANT,
      payload: result,
    })
  }
}

export const editMerchant = (merchant) => {
  return (dispatch) => {
    const result = merchantsService.editMerchant(merchant)
  
    dispatch({
      type: mutation.EDIT_MERCHANT,
      payload: result,
    })
  }
}

export const deleteMerchant = (id) => {
  return (dispatch) => {
    const result = merchantsService.deleteMerchant(id)

    dispatch({
      type: mutation.DELETE_MERCHANT,
      payload: result,
    })
  }
}
