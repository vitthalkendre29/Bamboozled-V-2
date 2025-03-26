const express = require("express");
const path = require("path");
const router = express.Router();
const { connectDB, closeDBConnection } = require("./db");// Import the database connection

// Serve static HTML pages
router.get("/bomboozled", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "main.html"));
});

router.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "from.html"));
});

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "dashboard.html"));
});

// Handle form submission
router.post("/data", async (req, res) => {
    const { playerName, contactNumber, emailAddress, college, otherCollegeName } = req.body;
    console.log(playerName,contactNumber);
    

    if (!playerName || !contactNumber || !emailAddress || !college) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        const { collection } = await connectDB();

        const newStudent = {
            name: playerName,
            contactno: contactNumber,
            email: emailAddress,
            college: college,
            collegename: otherCollegeName || null,
        };

        const result = await collection.insertOne(newStudent);

        console.log("Registration Successful:", result.insertedId);
        // res.status(201).json({ message: "Registration Successful changes made here 2", studentId: result.insertedId });
        res.redirect("https://bamboozled-v-2.vercel.app/bomboozled");
    } catch (error) {
        console.error("Database error:", error);
        res.status(500).json({ message: "Database error" });
    }
});
module.exports = router;
