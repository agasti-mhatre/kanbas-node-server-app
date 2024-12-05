import { QuizModel, QuestionModel } from "./model.js";

export async function fetchQuizzes(cid) {
    const quizzes = await QuizModel.find({ course: cid });
    return quizzes;
}
export async function fetchQuizzesById(quizId) {
    const quizzes = await QuizModel.find({ _id: quizId });
    return quizzes;
}

export async function fetchQuestions(quizId) {
    const questions = await QuestionModel.find({ quizId })
    return questions;
}

export async function addQuiz(quiz) {

    await QuizModel.create(quiz);
}

export async function updateQuiz(quiz) {

    const qid = quiz._id;
    delete quiz._id;
    await QuizModel.updateOne({_id: qid}, {$set: quiz});
}

export async function deleteQuiz(qid) {

    await model.deleteOne({_id: qid});
}

// export const updateQuestion = (questionId, updatedQuestion) => questionModel.updateOne({ questionId: questionId }, { $set: updatedQuestion });
// export const createQuestion = (question) => {
//     return questionModel.create(question);
// } 
// export async function deleteQuestion(_id) {
//     await QuestionModel.deleteOne({_id});
// }
// export async function updateQuestion(_id, updatedQuestion) {
//     QuestionModel.updateOne({ _id: _id }, { $set: updatedQuestion });
// }
// export async function createQuestion(question) {

//     return QuestionModel.create(question);
// }
export async function updateQuestion(questionId, updatedQuestion) {
    try {
        const updatedQ = await QuestionModel.findByIdAndUpdate(questionId, updatedQuestion, { new: true });
        return updatedQ;
    } catch (error) {
        console.error(`Error updating question with ID ${questionId}:`, error);
        throw error;
    }
}
export async function createQuestion(question) {
    try {
        const createdQuestion = await QuestionModel.create(question);
        return createdQuestion;
    } catch (error) {
        console.error("Error creating question:", error);
        throw error;
    }
}
export async function deleteQuestion(questionId) {
    try {
        const result = await QuestionModel.findByIdAndDelete(questionId);
        return result;
    } catch (error) {
        console.error(`Error deleting question with ID ${questionId}:`, error);
        throw error;
    }
}
