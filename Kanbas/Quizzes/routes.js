import * as quizDao from "./dao.js"

export default function QuizzesRoutes(app) {

    app.get("/api/quizzes/:cid", async (req, res) => {

        const { cid } = req.params;
        const quizzes = await quizDao.fetchQuizzes(cid);
        res.json(quizzes);
    });

}