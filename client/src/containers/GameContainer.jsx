import React from 'react'
import GuesserContainer from './GuesserContainer'
import ChooserContainer from './ChooserContainer'
import io from 'socket.io-client'

class GameContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      player: null,
      turn: 0,
      currentQuestion: null,
      questionHistory: []
    }
    this.socket = io()
    this.socket.on("question", this.state.currentQuestion)
    this.socket.on("answer", this.addAnswer.bind(this))


    this.submitQuestion = this.submitQuestion.bind(this);
    // this.addQuestion = this.addQuestion.bind(this);
    this.addAnswer = this.addAnswer.bind(this);
    this.questionKeyUp = this.questionKeyUp.bind(this);
  }
  //
  // addQuestion() {
  //   var question = this.state.currentQuestion
  // }

  addAnswer() {
    //TODO
  }

  submitQuestion(event) {
    event.preventDefault();

    if(this.state.currentQuestion) {

      let addedQuestion = {currentQuestion: this.state.currentQuestion};
      console.log("addedQuestion", addedQuestion);
      this.socket.emit("question": currentQuestion);

    }
  }

  questionKeyUp(event) {
    this.setState({
      currentQuestion: event.target.value
    });
  };

  selectGuesser() {
    this.setState({ player: "guesser" })
  }

  selectChooser() {
    this.setState({ player: "chooser" })
  }

  render() {
    if (this.state.player === "guesser") {
      return (
        <GuesserContainer questionKeyUp={this.questionKeyUp} onSubmit={this.submitQuestion} />
      )
    } else if (this.state.player === "chooser") {
      return (
        <ChooserContainer />
      )
    } else {
      return (
        <div>
          <button onClick={this.selectGuesser.bind(this)}>Guesser</button>
          <button onClick={this.selectChooser.bind(this)}>Chooser</button>
        </div>
      )
    }
  }

}

export default GameContainer
