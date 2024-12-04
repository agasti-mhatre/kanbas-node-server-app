

import mongoose from 'mongoose';
import { QuestionModel } from '../Quizzes/model.js';
import questions from './question.js'


const CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/kanbas';

mongoose.connect(CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function seedQuestions() {
  try {
    // Optional: Clear existing questions
    await QuestionModel.deleteMany({});

    // Insert questions into the database
    await QuestionModel.insertMany(questions);

    console.log('Questions seeded successfully');
  } catch (error) {
    console.error('Error seeding questions:', error);
  } finally {
    mongoose.disconnect();
  }
}

seedQuestions();
