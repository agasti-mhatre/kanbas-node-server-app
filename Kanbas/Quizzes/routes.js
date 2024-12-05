
import * as quizDao from "./dao.js"

export default function QuizzesRoutes(app) {

    app.get("/api/quizzes/:cid", async (req, res) => {

        const { cid } = req.params;
        const quizzes = await quizDao.fetchQuizzes(cid);
        res.json(quizzes);
    });
    app.get("/api/quizzes/Quiz/:quizId", async (req, res) => {
        const { quizId } = req.params;
        const quizzes = await quizDao.fetchQuizzesById(quizId);
        res.send(quizzes);
    });

    app.post("/api/quizzes", async (req, res) => {

        const status = await quizDao.addQuiz(req.body)
        res.send(status);
    });

    app.put("/api/quizzes", async (req, res) => {

        const status = await quizDao.updateQuiz(req.body);
        res.send(status);
    });

    app.delete("/api/quizzes/:qid", async (req, res) => {

        const { qid } = req.params;
        const status = await quizDao.deleteQuiz(qid);
        res.send(status);
    });

    app.get('/api/questions/:quizId', async (req, res) => {
        try {
            const { quizId } = req.params;
            const questions = await quizDao.fetchQuestions(quizId);
            console.log('look at the questions: ', questions);

            if (!questions) {
                return res.status(404).json({
                    message: 'No questions found',
                    questionId: questionId
                });
            }

            res.status(200).json({
                message: 'Questions fetched successfully',
                questions: questions
            });
        } catch (error) {
            console.error('Error fetching questions:', error);
            res.status(500).json({
                message: 'Internal server error',
                error: error.message
            });
        }
    });

    
    app.post("/api/quizzes/:quizId/questions", async (req, res) => {
        const newQuestion = {
            ...req.body,
        };
        if (newQuestion.questionId === '') {
            newQuestion.questionId = 'QS' + Math.floor(Math.random() * 1000);
        }
        const question = await quizDao.createQuestion(newQuestion);
        res.send(newQuestion);
    });
    

    app.delete("/api/questions/:questionId", async (req, res) => {
        const { questionId } = req.params;
        try {
            const deletedQuestion = await quizDao.deleteQuestion(questionId);
            if (!deletedQuestion) {
                return res.status(404).json({ message: "Question not found." });
            }
            res.json({ message: "Question deleted successfully." });
        } catch (error) {
            console.error(`Error deleting question with ID ${questionId}:`, error);
            res.status(500).json({ message: "Failed to delete question." });
        }
    });

    app.put("/api/questions/:questionId", async (req, res) => {
        const { questionId } = req.params;
        try {
            const updatedQuestionData = req.body;
            const updatedQuestion = await quizDao.updateQuestion(questionId, updatedQuestionData);
            if (!updatedQuestion) {
                return res.status(404).json({ message: "Question not found." });
            }
            res.json(updatedQuestion);
        } catch (error) {
            console.error(`Error updating question with ID ${questionId}:`, error);
            res.status(500).json({ message: "Failed to update question." });
        }
    });

}