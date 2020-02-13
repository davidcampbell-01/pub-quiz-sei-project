import React from 'react'
import axios from 'axios'
// import BrowserHistory from 'react-router/lib/BrowserHistory'
import Authorization from '../../../lib/authorization'

export default class Login extends React.Component {
  state = {
    data: {
      email: '',
      password: ''
    },
    error: ''
  }

  handleChange = ({ target: { name, value } }) => {
    const data = { ...this.state.data, [name]: value }
    this.setState({ data, error: '' })
  }

  handleSubmit = async e => {
    e.preventDefault()
    try {
      const res = await axios.post('/api/login', this.state.data)
      Authorization.setToken(res.data.token)
      console.log(res.data)
      this.props.history.push('/') // navigate to previous page
      
    } catch (error) {
      this.setState({ error: 'Invalid Credentials' })
    }
  }

  render() {
    console.log(this.state.data)
    return (
      <section className="form">
        <h1>Login Here</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-div">
            <input
              placeholder="email"
              name="email"
              onChange={this.handleChange} />
          </div>
          <div className="form-div">
            <input
              type="password"
              placeholder="password"
              name="password"
              onChange={this.handleChange} />
          </div>
          <div className="button-div">
            <button
              className="button"
              type="submit">
              Login</button>
          </div>
        </form>
      </section>
    )
  }
}