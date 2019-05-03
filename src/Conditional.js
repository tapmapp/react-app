import React, { Component } from 'react';

class Conditional extends Component {

    render() {
        return (
        <div>
            { this.props.isLoading ? <h5>Loading...</h5> : <h5>Loaded!</h5> }
        </div>
        )
    }

}

export default Conditional;