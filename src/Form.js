import React, { Component } from 'react';

class Form extends Component {

    constructor() {
        super()

        this.state = {
            firstName: '',
            lastName: '',
        }

        // BINDING CLICK EVENT TO THE CLASS
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event) {

        const { name, value } = event.target

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div>
                <form>
                    <input type="text" value={this.state.firstName} name="firstName" onChange={this.handleChange}/>
                    <br/>
                    <input type="text" value={this.state.lastName} name="lastName" onChange={this.handleChange}/>
                </form>
                {this.state.firstName} {this.state.lastName}
            </div>
        );
    }
}

export default Form;