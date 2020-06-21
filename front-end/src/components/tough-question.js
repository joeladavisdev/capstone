import React, { Component } from "react";


class ToughQuestion extends Component {
    constructor() {
        super();

        this.state = {
            enterQuestion: "",
            question: ""
        }
    }
    handleChange = (event) => {
        event.preventDefault()
        this.setState({
            enterQuestion: event.target.value
        })
    }
    onSubmit = (event) => {
        event.preventDefault();
        this.setState({
            question: this.state.enterQuestion,
            enterQuestion: ""
        })
    }
    render() {
        return (
            <div>
                <p>Question:</p>
                <form onSubmit = {this.onSubmit} >
                    <input
                    type='text'
                    placeholder= 'Question'
                    onChange={this.handleChange}
                    value={this.state.enterQuestion}
                    />
                <button type='submit'>Submit</button>
                <button type='delete'>Delete</button>
                </form>
                <div>
                {this.state.question}
                </div>
            </div>
        )
    }
}

export default ToughQuestion