from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS
import os

app = Flask(__name__)
db = SQLAlchemy(app)
ma = Marshmallow(app)
CORS(app)

basedir = os.path.abspath(os.path.dirname(__file__))
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///" + os.path.join(basedir, "app.sqlite")


class CodeChallenge(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    code_language = db.Column(db.String(80), nullable=False)
    code_instructions = db.Column(db.String(120), nullable=False)
    code = db.Column(db.String(420), nullable=False)

    def __init__(self, code_language, code_instructions, code):
        self.code_language = code_language
        self.code_instructions = code_instructions
        self.code = code


class ToughQuestion(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    question = db.Column(db.String(420), nullable=False)
    answer = db.Column(db.String(420), nullable=False)

    def __init__(self, question, answer):
        self.question = question
        self.answer = answer


class ToughQuestionSchema(ma.Schema):
  class Meta:
    fields = ("id", "question", "answer")


toughQuestion_schema = ToughQuestionSchema()
toughQuestions_schema = ToughQuestionSchema(many=True)


class CodeChallengeSchema(ma.Schema):
  class Meta:
    fields = ("id", "code_language", "code_instructions", "code" )


codeChallenge_schema = CodeChallengeSchema()
codeChallenge_schema = CodeChallengeSchema(many=True)


@app.route("/")
def hello():
    return "InnerView Back-end"


@app.route("/tough_question", methods=["POST"])
def add_tough_question():
    post_data = request.get_json()
    question = post_data.get('question')
    answer = post_data.get('answer')
    new_tough_question = ToughQuestion(question, answer)

    db.session.add(new_tough_question)
    db.session.commit()

    # question = ToughQuestion.query.get(new_question.id)


    return jsonify(toughQuestion_schema.dump(new_tough_question))
    

@app.route("/tough_questions", methods=["GET"])
def get_question():
    all_questions = ToughQuestion.query.all()
    print(all_questions)
    return jsonify(toughQuestions_schema.dump(all_questions))


# *****NOT WORKING******
# @app.route("/tough_question", methods=["DELETE"])
# def delete_question():
#     question = ToughQuestion.query.get(new_question.id)

#     db.session.delete(new_question)
#     db.session.commit()

#     return toughQuestion_schema.jsonify(question)



if __name__ == "__main__":
    app.debug = True
    app.run()

