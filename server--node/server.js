const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json()); // Parse JSON bodies

// Routes
app.get("/", (req, res) => {
    res.json({ message: "Welcome to the Node.js backend!" });
});


// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
