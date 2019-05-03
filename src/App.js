import React from 'react';

import Joke from './Joke';
import jokesData from './jokesData';

class Header extends React.Component {

  render() {
    return (
      <header>This is my header {this.props.username}</header>
    );
  }

}

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      isLoggedIn: true,
      jokes: jokesData,
    }

    // BINDING CLICK EVENT TO THE CLASS
    this.changeLogInState = this.changeLogInState.bind(this);
    this.selectBox = this.selectBox.bind(this);
  }

  myJokes() {
    return jokesData.map(joke => 
      <Joke 
        key={joke.id}
        item={joke}
        selectBox={this.selectBox}
      />
    );
  }

  isLoggedIn() {
    if(this.state.isLoggedIn) {
      return 'IN';
    } else {
      return 'OUT';
    }
  }

  changeLogInState() {

    this.setState(prevState => {
      return { isLoggedIn: !prevState.isLoggedIn };
    });
    
  }

  selectBox(id) {

    this.setState(prevState => {

      const updatedJokes = prevState.jokes.map(joke => {
        if(joke.id === id) {
          joke.state = !joke.state
        } else {
          joke.state = false;
        }
        return joke;
      });

      return {
        jokes: updatedJokes
      }

    }); 

    console.log(this.state.jokes)

  }

  render() {

    let wordDisplay = this.isLoggedIn();
    const jokeComponents = this.myJokes();

    return (
      <div className="App">
        <Header username="Francisco Roca"/>
        <h1>Logged In? {wordDisplay} <button onClick={this.changeLogInState}>Change State!</button></h1>
        {jokeComponents}
      </div>
    );
  }

} 

export default App;