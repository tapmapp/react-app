import React from 'react';

import Joke from './Joke';
import jokesData from './jokesData';

function App() {

  const jokeComponents = jokesData.map(joke => 
      <Joke 
        key={joke.id}
        name={joke.title} 
        desc={joke.desc}
        imgUrl="http://placekitten.com/300/400"
      />
  );

  return (
    <div className="App">
      <h1>This is my App Component and inside I have my Todo Item Component</h1>
      {jokeComponents}
    </div>
  );
  
}

export default App;