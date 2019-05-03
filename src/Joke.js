import React from 'react';

import './Joke.css';

function Joke(props) {
    return (
        <div className="contact" onClick={() => props.selectBox(props.item.id)}>
            <img src={props.item.imgUrl} alt={props.item.name}/>
            <h1>{props.item.name}</h1>
            <p>{props.item.desc}</p>
        </div>
    )
}

export default Joke;