import React, { Component } from "react";
import axios from 'axios';
import ToughQuestionDetails from "./tough-question-details";
import ToughQuestionForm from "./tough-question-form";

class ToughQuestionsPage extends Component {
    constructor() {
        super() 

        this.state= {
            toughQuestions: [],
            showToughQuestionForm: false
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

    handleSuccessfulToughQuestionSubmit = (newQuestion) => {
        this.setState((prevState) => ({
            showToughQuestionForm: !prevState.showToughQuestionForm,
            toughQuestions: [newQuestion, ...prevState.toughQuestions]
        }))
    }
    
    handleShowToughQuestionForm = () => {
        this.setState({
            showToughQuestionForm: !this.state.showToughQuestionForm
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
            <div>
                {
                    this.state.showToughQuestionForm ? (
                        <ToughQuestionForm handleSuccessfulToughQuestionSubmit={this.handleSuccessfulToughQuestionSubmit}/>
                    ) : ( 
                        <div>
                            <button onClick={this.handleShowToughQuestionForm}>Add new Question</button>

                            <div className="tough-question-page-form-wrapper">
                                <h1>Tough Questions</h1>
                                {this.renderToughQuestions()}
                            </div>
                        </div>
                    )
                }

            </div>
        )
    }
}

export default ToughQuestionsPage