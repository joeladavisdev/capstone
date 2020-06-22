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
        fetch('http://localhost:5000/tough_question',
        {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
                question: this.state.enterQuestion
            })
        })
        this.setState({
            question: this.state.enterQuestion,
            enterQuestion: ""
        })
    }
    render() {
        return (
            <div className='tough-question-form-wrapper'>
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