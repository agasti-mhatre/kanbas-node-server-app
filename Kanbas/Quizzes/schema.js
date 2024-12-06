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
    // questionId: {
    //     type: String, // In local db is using string
    //     required: true, 
    //     unique: true
    // },
    _id: {
        type: String,
        required: true
    },
    quizId: String,
    title: String, 
    text: String,
    type:  {
        type: String,
        enum: ['Multiple Choice', 'True or False', 'Fill in the blanks'],
    },
    options: [String],
    correctAnswer: [String],
    blanks: [],
    points: Number,
},
    { collection: "questions" });
// export const questionSchema = new mongoose.Schema({
//     questionId: { type: String, required: true, unique: true },
//     quizId: String,
//     title: String,
//     text: String,
//     type: {
//         type: String,
//         enum: ['Multiple Choice', 'True False', 'Fill in the blanks'],
//     },
//     options: [String],
//     correctAnswer: [String],
//     blanks: [],
//     points: Number,
// },
// { collection: "questions" });



// export const quizResultSchema = new mongoose.Schema({
//     quizId: String, 
//     userId: String, 
//     answers: [
//         {
//             questionId: String,
//             answer: String, 
//         }
//     ],
//     score: Number,
//     timestamp: {
//         type: Date,
//         default: Date.now
//     }
// },
// {collection: "quizResult"});
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