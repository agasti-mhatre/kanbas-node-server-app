import model from "./model.js";

export async function fetchQuizzes(cid) {

    const quizzes = await model.find({course: cid});
    return quizzes;
} 