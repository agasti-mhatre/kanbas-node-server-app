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
}