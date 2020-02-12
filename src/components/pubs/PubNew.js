import React from 'react'
import axios from 'axios'
import Authorization from '../../../lib/authorization'

import PubForm from './PubForm'

export default class PubNew extends React.Component {
  state = {
    data: {
      name: '',
      image: '',
      city: '',
      streetName: '',
      postcode: '',
      phone: '',
      website: '',
      description: '',
      maxTeamSize: '',
      quizDay: '',
      quizTime: '',
      averagePintCost: ''
    }
  }

  handleChange = ({ target: { name, value } }) => {
    const data = { ...this.state.data, [name]: value }
    console.log(data)
    this.setState({ data })
  }

  handleSubmit = async e => {
    e.preventDefault()
    try {
      const res = await axios.post('/api/pubs', this.state.data, {
        headers: { Authorization: `Bearer ${Authorization.getToken()}` }
      })
      console.log(res.data)
      this.props.history.push(`/pubs/${res.data._id}`)
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <>
      <h1>New Pub Page</h1>
      <h1>Create a pub!</h1>
      <PubForm 
        data={this.state.data}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}/>
      </>
    )
  }
}