import React, { Component } from "react";
import axios from 'axios';

class ToughQuestionDetails extends Component {
  

    deleteToughQuestionDetail = () => {
        axios.delete(`http://localhost:5000/delete_tough_question/${this.props.toughQuestionData.id}`)
        .then((res) => {
            if (res.data === 'question deleted') {
                this.props.handleSuccessfulToughQuestionDelete(this.props.toughQuestionData.id)
            }
        })
        .catch(err => {
            console.log("toughQuestion delete Error: ", err)
        })
    }

    // axios delete call and send the id which is from props
    // .then call handleSuccessfulToughQuestionDelete(res.data.id)


    render() {
        return (
            <div className="details-wrapper">
                
                <h1>{this.props.toughQuestionData.question}</h1>
                <h3>{this.props.toughQuestionData.answer}</h3>
                <div>
                    <button>Edit</button>
                    <button onClick={this.deleteToughQuestionDetail}>Delete</button>
                </div>

            </div>
        )
    }
}

export default ToughQuestionDetails


// - Question
// - Your answer
// - edit button
//     - opens tough-question-form component
// - delete button
//     - deletes the tough question from the database and then updates the tough-question-page components state
//         - axios call to your database
//         - pass some functions as props