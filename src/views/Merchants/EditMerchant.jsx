import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { Loader } from 'components'
import { FormMerchant } from 'views'
import { editMerchant, getMerchantById } from 'store/actions/merchant'

export class EditMerchant extends Component {
  constructor(props) {
    super(props)
    
    this.selectedMerchantId = this.props.match.params.id
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.props.getMerchantById(this.selectedMerchantId)
  }
  
  handleSubmit = (merchant) => {
    this.props.editMerchant(this.selectedMerchantId, merchant)
    this.props.history.push('/')
  }
  
  render() {
    return (
      <Loader isLoading={this.props.loading}>
        <FormMerchant
          handleSubmit={this.handleSubmit}
          merchant={this.props.selectedMerchant}
        />
      </Loader>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  editMerchant: (id, merchant) => {
    dispatch(editMerchant(id, merchant))
  },
  getMerchantById: (id) => {
    dispatch(getMerchantById(id))
  },
})

const mapStateToProps = (state) => ({
  selectedMerchant: state.selectedMerchant,
  loading: state.loading,
})

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EditMerchant)
)
