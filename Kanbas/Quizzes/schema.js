import mongoose from "mongoose";

export const quizSchema = new mongoose.Schema({
    _id: String,
    title: String,
    course: String,
    quizType: String,
    points: Number,
    assignmentGroup: String,
    shuffleAnswers: Boolean,
    timeLimit: String,
    multipleAttempts: Boolean,
    viewResponses: String,
    showCorrectAnswers: String,
    oneQuestionAtATime: Boolean,
    requireRespondusLockDown: Boolean,
    requiredToViewQuizResults: Boolean,
    webcamRequired: Boolean,
    lockQuestionsAfterAnswering: Boolean,
    accessCode: String,
    due: String,
    available: String,
    until: String,
    numberOfQuestions: Number,
    instructions: String,
    viewResponses: String,
    lessons: Array,
    editing: Boolean,
    published: Boolean
},
    { collection: "quizzes" }
);

export const questionSchema = new mongoose.Schema({
    questionId: {
        type: String, required: true, unique: true, default: function () {
            return 'QS' + Math.floor(Math.random() * 1000);
        }
    },
    quizId: String,
    title: String, 
    text: String,
    type:  {
        type: String,
        enum: ['Multiple Choice', 'True False', 'Fill in the blanks'],
    },
    options: [String],
    correctAnswer: String,
    points: Number,
},
    { collection: "questions" });
