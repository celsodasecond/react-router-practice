import React, { Component } from 'react'

export default class Card extends Component {

    state = { user: '' }

    componentDidMount() {
        let user = this.props.match.params.user 
        this.setState({user}) // ES2015 Allows the use of single variable since the key and value is the same.
    }

  render() {
    const { user } = this.state
    return (
        <div
            className='ui raised very padded text container segment' style={{ marginTop: '80px' }}>
            <h3 className='ui header'>{ user.toUpperCase() }</h3>
        </div>
    )
  }
}
