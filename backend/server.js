const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(
  cors({
    origin: 'https://taskmanagment-il4n.onrender.com',
  })
);
app.use(express.json());

mongoose
  .connect(
    'mongodb+srv://raisalrasheed545:sRDAcJ4B4CUk2O7p@taskmanagement.z4vvymx.mongodb.net/?retryWrites=true&w=majority&appName=taskManagement',
    {}
  )
  .then(() => console.log('MongoDB Connected'));

app.use('/api/tasks', require('./routes/tasks'));

app.listen(5000, () => console.log('Server running on port 5000'));
