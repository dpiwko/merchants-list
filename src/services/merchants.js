const endpointUrl = 'https://5f25fa6dc85de20016293464.mockapi.io/merchants/'

export default {
  getAll() {
    return fetch(endpointUrl, {
      method: 'GET',
    }).then((response) => response.json())
  },
  getById(id) {
    return fetch(`${endpointUrl}/${id}`, {
      method: 'GET',
    }).then((response) => response.json())
  },
  addMerchant(merchant) {
    return fetch(endpointUrl, {
      method: 'POST',
      body: merchant,
    }).then((response) => response.json())
  },
  editMerchant(merchant) {
    return fetch(endpointUrl, {
      method: 'PUT',
      body: merchant,
    }).then((response) => response.json())
  },
  deleteMerchant(id) {
    return fetch(`${endpointUrl}/${id}`, {
      method: 'DELETE',
    }).then((response) => response.json())
  },
}
