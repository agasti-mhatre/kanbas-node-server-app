

import mongoose from 'mongoose';
import { QuestionModel } from '../Quizzes/model.js';
import fs from 'fs/promises';
import path from 'path';
import questions from './question.js'


const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/kanbas';

mongoose.connect(CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const getQuestions = async () => {
  const filePath = path.resolve('./questions.json');
  const data = await fs.readFile(filePath, 'utf8');
  return JSON.parse(data);
}

async function seedQuestions() {
  try {
    // Optional: Clear existing questions
    await QuestionModel.deleteMany({});
    console.log('Existing data deleted!');

    // Insert questions into the database
    const questions = await getQuestions();
    await QuestionModel.insertMany(questions);
    console.log('Questions seeded successfully');
  } catch (error) {
    console.error('Error seeding questions:', error);
  } finally {
    mongoose.disconnect();
    console.log('DB disconnected');
  }
}

seedQuestions();
