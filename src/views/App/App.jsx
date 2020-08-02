import React from 'react'
import { Provider } from 'react-redux'
import store from 'store'
import MerchantsList from 'views/Merchants/MerchantsList'

const App = () => (
  <Provider store={store}>
    <div className="App">
      <MerchantsList />
    </div>
  </Provider>
)

export default App
