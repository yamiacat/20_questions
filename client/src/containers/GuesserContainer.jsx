import React from 'react'
import Guesser from '../components/Guesser.jsx'

class GuesserContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Guesser questionKeyUp={this.props.questionKeyUp} onSubmit={this.props.onSubmit}></Guesser>
    )
  }

}

export default GuesserContainer
