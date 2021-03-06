require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const app = express();

const corsOptions = {
  origin: 'http://localhost:3000'
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

require('./routes/account.routes')(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});