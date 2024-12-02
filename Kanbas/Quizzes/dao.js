import model from "./model.js";

export async function fetchQuizzes(cid) {

    const quizzes = await model.find({course: cid});
    return quizzes;
}

export async function addQuiz(quiz) {

    await model.create(quiz);
}

export async function updateQuiz(quiz) {

    const qid = quiz._id;
    delete quiz._id;
    await model.updateOne({_id: qid}, {$set: quiz});
}