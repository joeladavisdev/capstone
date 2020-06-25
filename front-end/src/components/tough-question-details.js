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


    // #########

    // editToughQuestionDetail = () => {
    //     axios.get(`http://localhost:5000/edit_tough_question/${this.props.toughQuestionData.id}`, {
    //         method: “PATCH”,
    //         headers: { “content-type”: “application/json” },
    //         body: JSON.stringify({
    //             showToughQuestionForm: true
    //         })  
    //     })
    //     // after getting data update state toughquestions with response
    //     .then(response => {
    //         console.log('axios response', response)
    //         this.setState({
    //             showToughQuestionForm: true,
    //         })
    //     })
    //     .catch(error => {
    //         console.log('fetch questions error', error)
    //     })
    
    // }


    // #########

    // class TodoItem extends React.Component {
    //     constructor(props) {
    //         super(props)
    //         this.state = {
    //             done: props.todoData.done
    //         }
    //     }
    //     toggleDone = () => {
    //         fetch(`http://localhost:5000/todo/${this.props.todoData.id}`, {
    //             method: “PATCH”,
    //             headers: { “content-type”: “application/json” },
    //             body: JSON.stringify({
    //                 done: !this.state.done
    //             })
    //         })
    //         .then(() => {
    //             this.setState({
    //                 done: !this.state.done
    //             })
    //         })
    //         .catch(err => {
    //             console.log(“toggleDone Error: “, err)
    //         })
    //     }
    //     render() {
    //         return (
    //             <div className=“todo-item”>
    //                 <input
    //                     type=“checkbox”
    //                     defaultChecked={this.state.done}
    //                     onClick={this.toggleDone}
    //                 />
    //                 <p className={this.state.done ? “done” : null}>
    //                     {this.props.todoData.title}
    //                 </p>
    //             </div>
    //         )
    //     }
    // }
    // export default TodoItem
    // #########



    render() {
        return (
            <div className="details-wrapper">
                
                <h1>{this.props.toughQuestionData.question}</h1>
                <h3>{this.props.toughQuestionData.answer}</h3>
                <div>
                    <button onClick={this.editToughQuestionDetail}>Edit</button>
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