const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const Feedback = require("./models/Feedback");

app.use(bodyParser.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://bilal:bilal@cluster0.fqfbe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const Trainer = require("./models/Trainer");


app.post("/api/trainer", async (req, res) => {
  try {
    const trainer = new Trainer(req.body);
    console.log("Received registration details:");
    console.log(req.body);

    await trainer.save();
    console.log("Registration saved successfully");

    res.status(201).send("Registration successful");
  } catch (error) {
    console.log(error.message);
    res.status(400).send("Error registering: " + error.message);
  }
});

const Registration = require("./models/Registration");

app.post("/api/register", async (req, res) => {
  try {
    const registration = new Registration(req.body);
    console.log("details in here ");
    console.log(req.body);

    await registration.save();
    console.log("its done");

    res.status(201).send("Registration successful");
  } catch (error) {
    console.log(error.message);
    res.status(400).send("Error registering: " + error.message);
  }
});
app.post("/api/feedback", async (req, res) => {
  try {
    const feedback = new Feedback(req.body);
    console.log(req.body);
    await feedback.save();
    res.status(201).send("Feedback submitted successfully");
  } catch (error) {
    res.status(400).send("Error submitting feedback: " + error.message);
  }
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
