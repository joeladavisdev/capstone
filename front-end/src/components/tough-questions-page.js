import React, { Component } from "react";
import axios from 'axios';
import ToughQuestionDetails from "./tough-question-details";

class ToughQuestionsPage extends Component {
    constructor() {
        super() 

        this.state= {
            toughQuestions: []
        }
    }

    componentDidMount() {
        // get the data
        axios.get('http://localhost:5000/tough_questions')
        // after getting data update state toughquestions with response
        .then(response => {
            console.log('axios response', response)
            this.setState({
                toughQuestions: response.data
            })
        })
        .catch(error => {
            console.log('fetch questions error', error)
        })
    }

    renderToughQuestions = () => {
        return this.state.toughQuestions.map((toughQuestion) => {
            console.log(toughQuestion)
            return <ToughQuestionDetails key={toughQuestion.id} toughQuestionData={toughQuestion} />
        })
    }

    render() {
        return (
            <div className="tough-question-page-form-wrapper">
                <h1>Tough Questions</h1>
                {this.renderToughQuestions()}
            </div>
        )
    }
}

export default ToughQuestionsPage