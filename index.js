import express from "express";
import Hello from "./Hello.js";
import Lab5 from "./Lab5/index.js";
import QueryParameters from "./Lab5/QueryParameters.js";

const app = express();

Lab5(app);
Hello(app);
QueryParameters(app);

app.listen(process.env.PORT || 4000);