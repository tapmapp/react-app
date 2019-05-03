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
      isLoggedIn: true
    }

    // BINDING CLICK EVENT TO THE CLASS
    this.changeLogInState = this.changeLogInState.bind(this);

  }

  myJokes() {
    return jokesData.map(joke => 
      <Joke 
        key={joke.id}
        name={joke.title} 
        desc={joke.desc}
        imgUrl="http://placekitten.com/300/400"
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