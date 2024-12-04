
import * as quizDao from "./dao.js"

export default function QuizzesRoutes(app) {

    app.get("/api/quizzes/:cid", async (req, res) => {

        const { cid } = req.params;
        const quizzes = await quizDao.fetchQuizzes(cid);
        res.json(quizzes);
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

    app.get('/questions/:quizId', async (req, res) => {
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
}