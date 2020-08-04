import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Card, Loader } from 'components'
import { getMerchants, deleteMerchant } from 'store/actions/merchant.js'

class MerchantsList extends Component {
  constructor() {
    super()

    this.handleRemove = this.handleRemove.bind(this)
  }

  componentDidMount() {
    this.props.getMerchants()
  }

  handleRemove(id) {
    this.props.deleteMerchant(id)
  }

  render() {
    return (
      <Loader isLoading={this.props.loading}>
        {this.props.merchants.map((merchant) => (
          <Card
            data={merchant}
            linkPath={`/edit/${merchant.id}`}
            handleRemove={this.handleRemove}
            key={merchant.id}
          />
        ))}
      </Loader>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMerchants: () => {
      dispatch(getMerchants())
    },
    deleteMerchant: (id) => {
      dispatch(deleteMerchant(id))
    },
  }
}

const mapStateToProps = (state) => {
  return {
    merchants: state.merchants,
    loading: state.loading,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MerchantsList)
