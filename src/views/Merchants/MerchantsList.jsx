import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Bids, Card, Loader, Pagination } from 'components'
import { getMerchants, deleteMerchant } from 'store/actions/merchant.js'

class MerchantsList extends Component {
  constructor() {
    super()
    
    this.itemsPerPage = 3

    this.handleRemove = this.handleRemove.bind(this)
    this.changePage = this.changePage.bind(this)
  }

  componentDidMount() {
    this.props.getMerchants()
  }

  handleRemove(id) {
    this.props.deleteMerchant(id)
  }
  
  changePage = (pageNumber) => {
    this.props.getMerchants(pageNumber, this.itemsPerPage)
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
          >
            <Bids bids={merchant.bids}/>
          </Card>
        ))}

        <Pagination
          currentPage={this.props.currentPage}
          numberOfPages={this.props.numberOfPages}
          changePage={this.changePage}
        />
      </Loader>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMerchants: (pageNumber, itemsPerPage) => {
      dispatch(getMerchants(pageNumber, itemsPerPage))
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
    currentPage: state.currentPage,
    numberOfPages: state.numberOfPages,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MerchantsList)
