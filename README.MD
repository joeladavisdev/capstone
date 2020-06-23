heading - tough questions
plus button that will opens the tough questions form and removes everything else on the page




    



# tough-question-page component
    state = [
        {
            id: 1,
            question: 'question data',
            answer: 'answer data
        },
        {
            id: 2,
            question: 'question data 2',
            answer: 'answer data 2'
        }
    ]
- map over that state and render tough question details compeonts
    - if there is two tough questions it will render two tough question components

# tough-question-details component
- Question
- Your answer
- edit button
    - opens tough-question-form component
- delete button
    - deletes the tough question from the database and then updates teh tough-question-page components state
        - axios call to your database
        - pass some functions as props