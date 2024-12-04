import { QuizModel, QuestionModel } from "./model.js";

export async function fetchQuizzes(cid) {
    const quizzes = await QuizModel.find({ course: cid });
    return quizzes;
}

export async function fetchQuestions(quizId) {
    const questions = await QuestionModel.find({ quizId })
    return questions;
}