import React from 'react';
import './App.css';
import NavBar from "./components/NavBar.js"
import CardsContainer from "./components/CardsContainer.js"

class App extends React.Component {
  constructor() { 
    super();
      this.state = {
        triviaQuestions: []
      }
  }

  componentDidMount() {
    fetch('http://jservice.io/api/clues')
      .then(response => response.json())
      .then(triviaQuestions => this.setState({ triviaQuestions }));
  }
    
  render() {
    return(
      <div className="App">
        <NavBar />
        <CardsContainer trivias={this.state.triviaQuestions}/>
      </div>
    );
  }
}

export default App;
