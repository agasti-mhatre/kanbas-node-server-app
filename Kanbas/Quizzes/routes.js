import { fetchQuizzes, fetchQuestions } from './dao.js';

export default function QuizzesRoutes(app) {
    // Route to fetch quizzes for a specific course
    app.get('/quizzes/:courseId', async (req, res) => {
        try {
            const { courseId } = req.params;
            const quizzes = await fetchQuizzes(courseId);

            if (!quizzes || quizzes.length === 0) {
                return res.status(404).json({
                    message: 'No quizzes found for this course',
                    courseId
                });
            }

            res.status(200).json({
                message: 'Quizzes fetched successfully',
                quizzes: quizzes
            });
        } catch (error) {
            console.error('Error fetching quizzes:', error);
            res.status(500).json({
                message: 'Internal server error',
                error: error.message
            });
        }
    });

    // Route to fetch questions for a specific quiz
    app.get('/questions/:quizId', async (req, res) => {
        try {
            const { quizId } = req.params;
            const questions = await fetchQuestions(quizId);
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