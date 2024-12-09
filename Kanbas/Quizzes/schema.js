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
   
    questionId: String,
    quizId: String,
    text: String,
    type:  {
        type: String,
        enum: ['Multiple Choice', 'True or False', 'Fill in the blanks'],
    },
    options: [String],
    correctAnswer: [String],
    blankAnswers: [String],
    points: Number,
    editMode: Boolean,
},
    { collection: "questions" });

export const quizResultSchema = new mongoose.Schema({
    quizId: {
        type: String,
        required: true
    }, 
    userId: String,
    answers: [
        {
            questionId: String,  
            answer: String, 
        }
    ],
    score: {
        type: Number,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
},
{ collection: "quizResult" });