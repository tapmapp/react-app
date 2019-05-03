import React from 'react';

import Joke from './Joke';
import jokesData from './jokesData';

class Header extends React.Component {
  render() {
    return (
      <header>This is my header {this.props.username}</header>
    )
  }
}

class App extends React.Component {

  constructor() {
    
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

  render() {

    const jokeComponents = this.myJokes();

    return (
      <div className="App">
        <Header username="Francisco Roca"/>
        <h1>This is my App Component and inside I have my Todo Item Component</h1>
        {jokeComponents}
      </div>
    )
  }

} 

export default App;