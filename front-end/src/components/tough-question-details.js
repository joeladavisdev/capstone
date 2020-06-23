import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ToughQuestionDetails extends Component {
    render() {
        return (
            <div>
                
                <h1>{this.props.toughQuestionData.question}</h1>
                <h3>{this.props.toughQuestionData.answer}</h3>
                <div>
                    <button>EDIT</button>
                    <button>DELETE</button>
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