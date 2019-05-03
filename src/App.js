import React from 'react';

import Conditional from './Conditional';
import Form from './Form';
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
      form: {
        firstName: "",
        lastName: "",
      },
      isLoading: false,
      isLoggedIn: true,
      jokes: jokesData,
      character: {}
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

  }

  // only run once, API calls
  componentDidMount() {

    this.setState({ isLoading: true });

    fetch("https://swapi.co/api/people/1").then(res => 
      res.json()
    ).then(data => {

      this.setState({
        isLoading: false,
        character: data
      });

    });

  }

  static getDerivedStateFromProps(props, state) {
    // return the new updated state based upon the props
  }

  getSnapshotBeforeUpdate() {
    // create a backup of the current way things are
  }

  // receive props from parent component
  // runs everytime the component receive props
  componentWillReceiveProps(nextProps) {
  
  }

  // should rerender the component?
  // gives us the chance to optimize our app
  // implement some logic for update the component or not
  shouldComponentUpdate(nextProps, nextState) {
    // return true if we want to update
    // return false if we dont want
    return true;
  }

  componentWillUnmount() {
    // cleanup your code before the component disappears
  }

  render() {

    let wordDisplay = this.isLoggedIn();
    const jokeComponents = this.myJokes();

    return (
      <div className="App">
        <Conditional isLoading={this.state.isLoading}/>
        <Header username="Francisco Roca"/>
        <Form/>
        <h1>Logged In? {wordDisplay} <button onClick={this.changeLogInState}>Change State!</button></h1>
        {jokeComponents}
        {this.state.character.name}
      </div>
    );
  }

} 

export default App;