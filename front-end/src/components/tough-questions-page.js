import React, { Component } from "react";
import ToughQuestion from "./tough-question";

class ToughQuestionsPage extends Component {
    render() {
        return (
            <div className="tough-question-page-form-wrapper">
                <h1>Tough Questions</h1>
                <ToughQuestion />
           
            </div>
        )
    }
}

export default ToughQuestionsPage