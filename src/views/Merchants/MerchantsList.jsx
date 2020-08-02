import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card } from 'components'

import { getMerchants } from 'store/actions/merchant.js'

const mapDispatchToProps = (dispatch) => {
  return {
    getMerchants: () => { dispatch(getMerchants()) },
  }
}

const mapStateToProps = (state) => {
  return {
    merchants: state.merchants,
  }
}

class MerchantsList extends Component {
  
  componentDidMount() {
    this.props.getMerchants()
  }
  
  render() {
    return (
      <div>
        {this.props.merchants.map((merchant) => (
          <Card
            data={merchant}
            key={merchant.id}
          />
        ))}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MerchantsList)
