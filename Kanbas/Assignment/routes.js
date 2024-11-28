import * as assignmentDao from "./dao.js";

export default function AssignmentRoutes(app) {

    app.delete("/api/assignments/:assignmentId", async (req, res) => {

        const { assignmentId } = req.params;
        await assignmentDao.deleteAssignment(assignmentId);
        res.sendStatus(204);
    });

    app.get("/api/assignments/:cid", async (req, res) => {

        const { cid } = req.params;
        const assignments = await assignmentDao.fetchAssignmentsForCourse(cid);
        res.json(assignments);
    });

    app.post("/api/assignments", async (req, res) => {

        await assignmentDao.createAssignment(req.body);
        res.sendStatus(204);
    });

    app.put("/api/assignments", async (req, res) => {

        const updatedAssignment = req.body;
        await assignmentDao.updateAssignment(updatedAssignment);
        res.sendStatus(204);
    });
}