const assignment = {
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: false, score: 0,
};

const module = {

    id: 2,
    name: "React Basics",
    description: "Basics of frontend programming",
    course: "Full stack development"
};

export default function WorkingWithObjects(app) {
    
    app.get("/lab5/assignment", (req, res) => {
        
        res.json(assignment);
    });
    
    app.get("/lab5/assignment/title", (req, res) => {

        res.json(assignment.title);
    });

    app.get("/lab5/assignment/title/:newTitle", (req, res) => {
        
        const { newTitle } = req.params;
        assignment.title = newTitle;
        res.json(assignment);
    });

    app.get("/lab5/module", (req, res) => {

        res.json(module);
    });

    app.get("/lab5/module/name", (req, res) => {

        res.json(module.name);
    });

    app.get("/lab5/module/:newName", (req, res) => {

        const { newName } = req.params;
        module.name = newName;
        res.json(module);
    });

    app.get("/lab5/assignment/score/:newScore", (req, res) => {
        
        const { newScore } = req.params;
        assignment.score = newScore;
        res.json(assignment);
    });

    app.get("/lab5/assignment/status/:newStatus", (req, res) => {
        
        const { newStatus } = req.params;
        assignment.completed = newStatus;
        res.json(assignment);
    });
};  