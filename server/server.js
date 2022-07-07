require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

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

// const cors = require('cors');
// const corsOptions = {
//   origin: 'http://localhost:'
// };
//
// app.use(cors(corsOptions));
// app.use(express.urlencoded({extended: true}));
// app.get("/", (req, res) => {
//   res.json({message: "Application running..."});
// });