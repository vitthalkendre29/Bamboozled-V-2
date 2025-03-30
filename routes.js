const express = require("express");
const path = require("path");
const router = express.Router();
const session = require("express-session");
const { connectDB, closeDBConnection } = require("./db");


// Configure session middleware
router.use(session({
    secret: "vicky", // Change this to a strong secret key
    resave: false,
    saveUninitialized: true,
}));

// Middleware to check if user is authenticated
function isAuthenticated(req, res, next) {
    if (req.session.user) {
        return next();
    }
    return res.status(403).json({ message: "Access denied. Please log in or register." });
}

// Middleware to prevent logged-in users from accessing login/register pages
function preventAuthPages(req, res, next) {
    if (req.session.user) {
        return res.redirect("/bomboozled");
    }
    next();
}


// Serve static HTML pages
router.get("/bomboozled",isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "public", "main.html"));
});

router.get("/register", preventAuthPages, (req, res) => {
    res.sendFile(path.join(__dirname, "public", "from.html"));
});

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "dashboard.html"));
});

router.get("/final",isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "public", "final.html"));
});

router.get("/loginpage",preventAuthPages, (req, res) => {
    res.sendFile(path.join(__dirname, "public", "login.html"));
});

router.post("/logout", (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).json({ message: "Logout failed" });
        }
        res.status(200).json({ message: "Logout successfulyy by vicky", redirectUrl: "/loginpage" });
    });
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

        // Store user session
        req.session.user = {
            name: user.name,
            email: user.email
        };

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

        req.session.user = {
            name: playerName,
            email: emailAddress
        };

        res.status(201).json({
            message: "Registration Successful",
            studentId: result.insertedId,
            redirectUrl: "https://bamboozled-v-2.vercel.app/bomboozled"
        });

    } catch (error) {
        console.error("Database error:", error);
        res.status(500).json({ message: "Database error" });
    }


});
module.exports = router;
