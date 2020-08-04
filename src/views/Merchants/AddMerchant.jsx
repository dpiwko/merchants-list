import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { FormMerchant } from 'views'
import { addMerchant } from 'store/actions/merchant'

export class AddMerchant extends Component {
  constructor() {
    super()
    
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleSubmit = (merchant) => {
    this.props.addMerchant(merchant)
    this.props.history.push('/')
  }
  render() {
    return (
      <FormMerchant
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addMerchant: (merchant) => {
    dispatch(addMerchant(merchant))
  },
})

export default withRouter(
  connect(null, mapDispatchToProps)(AddMerchant)
)
