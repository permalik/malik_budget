require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const app = express();
const corsOptions = {
  origin: 'http://localhost:8080'
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.get("/", (req, res) => {
  res.json({message: "Application running..."});
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const db = require('./models');
db.sequelize.sync({force: true})
  .then(() => {
    console.log('Synced db.');
  })
  .catch((error) => {
    console.log('Failed to sync:', error.message);
  });