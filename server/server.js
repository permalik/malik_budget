require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
// const mongoose = require('mongoose');
const app = express();

const corsOptions = {
  origin: 'http://localhost:8080'
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const db = require('./models');
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected to database');
  })
  .catch(error => {
    console.log('Cannot connect to database', error);
    process.exit();
  });

app.get('/', (req, res) => {
  res.json({message: 'Application running.'});
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// mongoose.connect(mongoString);
// const database = mongoose.connection;
//
// database.on('error', (error) => {
//   console.log(error);
// });
//
// database.once('connected', () => {
//   console.log('Database Connected');
// });

// app.use(express.urlencoded({extended: true}));
// app.get("/", (req, res) => {
//   res.json({message: "Application running..."});
// });