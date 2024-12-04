import { QuizModel, QuestionModel } from "./model.js";

export async function fetchQuizzes(cid) {
    const quizzes = await QuizModel.find({ course: cid });
    return quizzes;
}

export async function fetchQuestions(quizId) {
    const questions = await QuestionModel.find({ quizId })
    return questions;
}

export async function addQuiz(quiz) {

    await model.create(quiz);
}

export async function updateQuiz(quiz) {

    const qid = quiz._id;
    delete quiz._id;
    await model.updateOne({_id: qid}, {$set: quiz});
}

export async function deleteQuiz(qid) {

    await model.deleteOne({_id: qid});
}