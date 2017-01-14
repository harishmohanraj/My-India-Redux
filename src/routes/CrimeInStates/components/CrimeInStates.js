import React from 'react'

export default class CrimeInStates extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.requestData()
  }

  render() {
    return (<p>Check!!!!!!!!!!!</p>)
  }
}

CrimeInStates.propTypes = {
  requestData   : React.PropTypes.func.isRequired
}