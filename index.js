import express from "express";
import Hello from "./Hello.js";
import Lab5 from "./Lab5/index.js";
import cors from "cors";
import UserRoutes from "./Kanbas/Users/routes.js";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import session from "express-session";
import "dotenv/config";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import AssignmentRoutes from "./Kanbas/Assignment/routes.js";
import EnrollmentRoutes from "./Kanbas/Enrollments/routes.js";
import mongoose from "mongoose";
import QuizzesRoutes from "./Kanbas/Quizzes/routes.js";

const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kanbas";
mongoose.connect(CONNECTION_STRING);
const app = express();

app.use(

    cors({
        credentials: true,
        origin: process.env.NETLIFY_URL || "http://localhost:3000",
    })
);

const sessionOptions = {
    
    secret: "any string",
    resave: false,
    saveUninitialized: false,
};

if (process.env.NODE_ENV !== "development") {
    
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
      sameSite: "none",
      secure: true,
      domain: process.env.NODE_SERVER_DOMAIN,
    };
}
  
app.use(express.json());

app.use(
    session(sessionOptions)
);

UserRoutes(app);
CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);
EnrollmentRoutes(app);
QuizzesRoutes(app);
Lab5(app);
Hello(app);

app.listen(process.env.PORT || 4000);