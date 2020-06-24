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
    
    // filter out unwanted id
    handleSuccessfulToughQuestionDelete = (id) => {
        this.setState({
            toughQuestions: this.state.toughQuestions.filter(toughQuestion => {
            return toughQuestion.id !== id
            })
        })
      }


    handleShowToughQuestionForm = () => {
        this.setState({
            showToughQuestionForm: !this.state.showToughQuestionForm
        })
    }

    renderToughQuestions = () => {
        return this.state.toughQuestions.map((toughQuestion) => {
            console.log(toughQuestion)
            return <ToughQuestionDetails key={toughQuestion.id} toughQuestionData={toughQuestion}
            handleSuccessfulToughQuestionDelete={this.handleSuccessfulToughQuestionDelete}/>
        })
    }

    render() {
        return (
            <div className= "tough-question-page-form-wrapper">
                <h1>Tough Questions</h1>
                {
                    this.state.showToughQuestionForm ? (
                        <ToughQuestionForm handleSuccessfulToughQuestionSubmit={this.handleSuccessfulToughQuestionSubmit}
                        handleSuccessfulToughQuestionDelete={this.handleSuccessfulToughQuestionDelete}/>
                    ) : ( 
                        <div className= "tough-question-add-button">
                            <button onClick={this.handleShowToughQuestionForm}>+</button>

                            <div className="tough-question-page-form-wrapper">
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