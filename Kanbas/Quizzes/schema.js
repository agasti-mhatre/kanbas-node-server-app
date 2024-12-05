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
    _id: String,
    quizId: String,
    text: String,
    type: String,
    options: [String],
    correctAnswer: String,
    points: Number,
    __v: Number
},
    { collection: "questions" });
