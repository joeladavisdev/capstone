import React, { Component } from "react";


class ToughQuestionDetails extends Component {
 
    render() {
        return (
            <div className="details-wrapper">
                
                <h1>{this.props.toughQuestionData.question}</h1>
                <h3>{this.props.toughQuestionData.answer}</h3>
                <div>
                    <button>Edit</button>
                    <button>Delete</button>
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
//     - deletes the tough question from the database and then updates teh tough-question-page components state
//         - axios call to your database
//         - pass some functions as props