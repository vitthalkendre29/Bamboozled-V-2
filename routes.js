const express = require("express");
const path = require("path");
const router = express.Router();
const { connectDB, closeDBConnection } = require("./db");// Import the database connection
const checkUserRegistration = require("./middleware/checkUserRegistration.js")

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

router.get("/final", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "final.html"));
});

router.get("/loginpage", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "login.html"));
});

router.post("/login", async (req, res) => {

    const { email, contactNumber } = req.body;

    if (!email || !contactNumber) {
        return res.status(400).json({ message: "Email and contact number are required" });
    }

    try {
        const { collection } = await connectDB();

        // Find user by email and contact number
        const user = await collection.findOne({ 
            email: email, 
            contactno: contactNumber 
        });

        if (!user) {
            return res.status(404).json({ message: "User not found. Please register or check your details." });
        }

        // Successful login
        res.status(200).json({
            message: "Login Successful",
            name: user.name,
            redirectUrl: "https://bamboozled-v-2.vercel.app/bomboozled"
        });

    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: "Server error during login" });
        }
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
        // res.redirect("https://bamboozled-v-2.vercel.app/bomboozled");
        res.status(201).json({
            message: "Registration Successful",
            studentId: result.insertedId,
            redirectUrl: "https://bamboozled-v-2.vercel.app/bomboozled"
        });

    } catch (error) {
        console.error("Database error:", error);
        res.status(500).json({ message: "Database error" });
    }

    localStorage.setItem("playername", playerName);

    // Retrieve and log the value
    console.log("script1:", localStorage.getItem("playername"));

});
module.exports = router;
