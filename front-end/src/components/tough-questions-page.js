import React, { Component } from "react";
import ToughQuestionDetails from "./tough-question-details";

class ToughQuestionsPage extends Component {
    constructor() {
        super() 

        this.state= {
            toughQuestions: []
        }
    }

    componentDidMount() {
        // fetch data
        // after fetch update state toughquestions with response from fetch call
    }

    renderToughQuestions = () => {

    }

    render() {
        return (
            <div className="tough-question-page-form-wrapper">
                <h1>Tough Questions</h1>
                <ToughQuestionDetails />
                <ToughQuestionDetails />
            </div>
        )
    }
}

export default ToughQuestionsPage