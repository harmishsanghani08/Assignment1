const express = require("express");
const app = express();
const path = require("path");

// Serve static files from the "public" directory
app.use(express.static("public"));

// Start the server on port 8000
app.listen(8000, () => {
    console.log("Server is running on port 8000");
});

// Define the /gethello route
app.get("/gethello", (req, res) => {
    res.send("Hello NodeJS!!");
});