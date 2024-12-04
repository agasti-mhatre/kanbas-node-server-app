import mongoose from "mongoose";
import { questionSchema, quizSchema } from "./schema.js";

export const QuizModel = mongoose.model("QuizModel", quizSchema);

export const QuestionModel = mongoose.model("QuestionModel", questionSchema, 'questions');
