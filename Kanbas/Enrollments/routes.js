import * as enrollmentDao from "./dao.js";

export default function EnrollmentRoutes(app) {

    app.post("/api/enrollments", (req, res) => {

        enrollmentDao.addEnrollment(req.body);
        res.sendStatus(204);
    });

    app.delete("/api/enrollments", (req, res) => {

        enrollmentDao.deleteEnrollment(req.body);
        res.sendStatus(204);
    });

    app.get("/api/enrollments/:id", (req, res) => {

        const { id } = req.params;
        res.json(enrollmentDao.fetchEnrollments(id));
    });
}