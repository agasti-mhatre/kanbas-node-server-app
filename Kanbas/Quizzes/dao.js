import { QuizModel, QuestionModel, QuizResult} from "./model.js";


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

    await QuizModel.deleteOne({_id: qid});
}

export async function updateQuestion(questionId, updatedQuestion) {
    try {
        const updatedQ = await QuestionModel.findOneAndUpdate(
            { questionId }, // Use questionId explicitly
            updatedQuestion,
            { new: true } // Return the updated document
        );
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
        const result = await QuestionModel.findOneAndDelete({ questionId }); 
        return result;
    } catch (error) {
        console.error(`Error deleting question with ID ${questionId}:`, error);
        throw error;
    }
}



export const saveOrUpdateQuizResult = async (quizResultData) => {
    const { quizId, userId, answers } = quizResultData;

    try {
        let totalScore = 0;

        for (let answer of answers) {
            console.log("Processing questionId:", answer.questionId);
            
            // Fetch the corresponding question using `questionId` directly, not `_id`
            const question = await QuestionModel.findOne({ questionId: answer.questionId });
            if (!question) {
                console.error(`Question with ID ${answer.questionId} not found`);
                continue;
            }

            // Compare user's answer with the correct answer
            console.log("User's answer:", answer.answer);
            console.log("Correct answer:", question.correctAnswer);
            if (Array.isArray(answer.answer) && Array.isArray(question.correctAnswer)) {
                if (JSON.stringify(answer.answer) === JSON.stringify(question.correctAnswer)) {
                    totalScore += question.points;
                }
            } else if (answer.answer === question.correctAnswer[0]) {
                totalScore += question.points;
            } else {
                console.log("Answers do not match.");
            }
        }

        console.log("Final calculated score:", totalScore);

        // If everything is correct, save the result
        return await QuizResult.findOneAndUpdate(
            { quizId, userId },
            { answers, score: totalScore, timestamp: new Date() },
            { new: true, upsert: true }
        );
    } catch (error) {
        console.error("Error saving or updating quiz result:", error);
        throw error;
    } 
};

export const fetchQuizResultByQuizAndUser = async (quizId, userId) => {
    try {
        // Fetch the quiz result using both `quizId` and `userId`
        const quizResult = await QuizResult.findOne({ quizId, userId });

        if (!quizResult) {
            console.error(`No quiz result found for quizId: ${quizId} and userId: ${userId}`);
            return null; // Return null if no quiz result is found
        }

        // Log the fetched result for debugging purposes
        console.log("Fetched Quiz Result:", JSON.stringify(quizResult, null, 2));

        return quizResult;
    } catch (error) {
        console.error("Error fetching quiz result by quiz and user ID:", error);
        throw error;
    }
};
