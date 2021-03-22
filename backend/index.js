import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
// you no longer have to import body-parser
// it is built into express
//import bodyParser from "body-parser";

const app = express();
const PORT = 3001;

// mongo connection
mongoose.Promise = global.Promise;
// this is your connection to the database
// if you had it in the cloud, instead of 'localhost'
// you'd have the URL to your cloud database
mongoose.connect("mongodb://localhost/soccerDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// transpile code into something that mongo or our database will understand
// use 'express.urlencoded' instead of 'bodyParser.urlencoded({...})
app.use(express.urlencoded({ extended: true }));
//app.use(express.json());

app.get("/", (req, res) => {
  res.send(`Node is running on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Your application is running on port ${PORT}`);
});
