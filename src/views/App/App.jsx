import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import store from 'store'
import { Nav } from 'components'
import { MerchantsList, AddMerchant, EditMerchant } from 'views'

const App = () => (
  <Provider store={store}>
    <Router>
      <Nav/>
    
      <Switch>
        <Route path="/" component={MerchantsList} exact />
        <Route path="/add" component={AddMerchant} />
        <Route path="/edit/:id" component={EditMerchant} />
      </Switch>
    </Router>
  </Provider>
)

export default App
