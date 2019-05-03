import React from 'react';

function Joke(props) {
    return (
        <div className="contact">
            <img src={props.imgUrl} alt={props.name}/>
            <h1>{props.name}</h1>
            <p>{props.desc}</p>
        </div>
    )
}

export default Joke;