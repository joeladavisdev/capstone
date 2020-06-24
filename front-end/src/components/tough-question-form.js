import React, { Component } from "react";
import axios from "axios";



class ToughQuestionForm extends Component {
    constructor() {
        super();

        this.state = {
            question: "",
            answer: ""
        }
    }

    handleChange = (event) => {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault();
        axios({
            method: 'post',
            url: 'http://localhost:5000/tough_question',
            data: {
                question: this.state.question,
                answer: this.state.answer
            }
        }).then(res => {
            console.log(res)
            this.props.handleSuccessfulToughQuestionSubmit(res.data)
        }).catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <div className="form-wrapper">
                <h1>Enter a tough question and your answer:</h1>
                <form onSubmit = {this.onSubmit} >
                    <input
                        name="question"
                        type='text'
                        placeholder= 'Question'
                        onChange={this.handleChange}
                        value={this.state.question}
                    />
                    <input
                        name="answer"
                        type='text'
                        placeholder= 'Your Answer'
                        onChange={this.handleChange}
                        value={this.state.answer}
                    />
                    <div>
                        <button type='submit'>Submit</button>
                    </div>
                    
                </form>
                
            </div>
        )
    }
}

export default ToughQuestionForm