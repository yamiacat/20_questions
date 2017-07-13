import React from 'react';

class Guesser extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <form onSubmit={this.props.onSubmit}>
          <input type="text" onKeyUp={this.props.questionKeyUp} placeholder="Hail Guesser! Enter your question!"></input>
          <input type="submit" name="submit" value="ASK THE QUESTION"></input>
        </form>
      </div>
    )
  }
}


export default Guesser;
