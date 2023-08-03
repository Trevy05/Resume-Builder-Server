const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./mongodb"); // Import the connectDB function

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Enable CORS for all routes

// Define your API routes here

app.get("/api/resumes", (req, res) => {
  // Your logic to fetch and send resumes from the database
  res.json({ message: "Fetching resumes" });
});

app.post("/api/resumes", (req, res) => {
  // Your logic to create a new resume in the database based on data from req.body
  res.json({ message: "Resume created successfully" });
});

// Connect to the MongoDB database
connectDB().then(() => {
  // Start the server after the database connection is established
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
});
