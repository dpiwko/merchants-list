import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { Input, Checkbox, Button } from 'components' 

export class FormMerchant extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      submitted: false,
      validations: {
        firstname: false,
        lastname: false,
        email: false,
        phone: false,
      },
      merchant: {
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        avatarUrl: '',
        hasPremium: false,
      },
    }
    
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  componentDidMount() {
    if (this.props.merchant) {
      this.setState({
        merchant: {
          ...this.state.merchant,
          ...this.props.merchant,
        },
      })
    }
  }
  
  handleInputChange = (event) => {
    this.setState({
      merchant: {
        ...this.state.merchant,
        [event.target.name]: event.target.value,
      },
    })
  }

  handleCheckboxChange = () => {
    this.setState({
      merchant: {
        ...this.state.merchant,
        hasPremium: !this.state.merchant.hasPremium,
      },
    })
  }

  handleCancel = () => {
    this.props.history.push('/')
  }
  
  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      submitted: true
    })

    const isValid = this.checkValidations();
    if (isValid) {
      this.props.handleSubmit(this.state.merchant)
    }
  }
  
  checkValidations = () => {
    const validationValues = []
    const validationObj = {}

    for (const key in this.state.merchant) {
      if (this.state.validations.hasOwnProperty(key)) {
        const value = this.state.merchant[key] === ''

        validationObj[key] = value
        validationValues.push(value)
      }
    }

    this.setState({
      validations: validationObj
    })

    return validationValues.includes(false)
  }

  render() {
    const { merchant, validations, submitted } = this.state
  
    return (
      <form onSubmit={this.handleSubmit} noValidate>
        <Input
          label="First Name"
          name="firstname"
          required={true}
          value={merchant.firstname}
          onChange={this.handleInputChange}
          isValid={validations.firstname && submitted}
        />

        <Input
          label="Last Name"
          name="lastname"
          required={true}
          value={merchant.lastname}
          onChange={this.handleInputChange}
          isValid={validations.lastname && submitted}
        />

        <Input
          label="Email"
          name="email"
          required={true}
          value={merchant.email}
          onChange={this.handleInputChange}
          isValid={validations.email && submitted}
        />

        <Input
          label="Phone"
          name="phone"
          type="number"
          required={true}
          value={merchant.phone}
          onChange={this.handleInputChange}
          isValid={validations.phone && submitted}
        />

        <Input
          label="Avatar Link"
          name="avatarUrl"
          value={merchant.avatarUrl}
          onChange={this.handleInputChange}
        />

        <Checkbox
          label="Premium"
          name="premium"
          checked={merchant.hasPremium ? 'checked' : ''}
          onChange={this.handleCheckboxChange}
        />

        <Button className="is-secondary" onClick={this.handleCancel}>
          Cancel
        </Button>

        <Button type="submit">{merchant.id ? 'Edit' : 'Add'}</Button>
      </form>
    )
  }
}

export default withRouter(FormMerchant)
