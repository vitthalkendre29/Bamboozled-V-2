const express = require("express");
const path = require("path");
const router = express.Router();
const session = require("express-session");
const { connectDB } = require("./db");// Import the database connection
const MongoStore = require("connect-mongo");


const MONGO_URI = "mongodb+srv://vicky:vicky123@autorest.xacrthx.mongodb.net";


router.use(session({
    name:"bomboozledSession",
    secret: "vicky", // Use a strong secret key
    resave: false,
    saveUninitialized: false,  // Ensure session is only created when needed
    store: MongoStore.create({
        mongoUrl: MONGO_URI,// Store sessions in MongoDB
        dbName: "studentinfo",   
        collectionName: "sessions",
        ttl: 30*10, // 1 day session expiration
    }),
    cookie: {
        secure: process.env.NODE_ENV === "production",  // Ensure this is false for localhost, true for HTTPS
        httpOnly: true,
        sameSite: "lax"
    }
}));

// Middleware to track last visited page
function trackLastPage(req, res, next) {
    if (req.session.user) {
        req.session.lastPage = req.path;
    }
    next();
}

// Middleware to enforce returning to the last visited page
function enforceLastPage(req, res, next) {
    if (req.session.user && req.session.lastPage && req.path !== req.session.lastPage) {
        return res.redirect(req.session.lastPage);
    }
    next();
}

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
        return res.redirect(req.session.lastPage || "/bomboozled");
    }
    next();
}


// Serve static HTML pages
router.get("/bomboozled",isAuthenticated,trackLastPage, (req, res) => {
    res.sendFile(path.join(__dirname, "public", "main.html"));
});

router.get("/register", preventAuthPages, (req, res) => {
    res.sendFile(path.join(__dirname, "public", "from.html"));
});

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "dashboard.html"));
});

router.get("/final",isAuthenticated,trackLastPage, (req, res) => {
    res.sendFile(path.join(__dirname, "public", "final.html"));
});

router.get("/loginpage",preventAuthPages, (req, res) => {
    res.sendFile(path.join(__dirname, "public", "login.html"));
});

// Apply `enforceLastPage` middleware
router.use(enforceLastPage);


router.post("/logout", async (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.status(500).json({ message: "Logout failed" });
        }
        res.clearCookie("bomboozledSession"); // Clear session cookie
        res.status(200).json({ message: "Logout successful", redirectUrl: "/loginpage" });
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
        req.session.save(err => {
            if (err) {
                console.error("Session save error:", err);
                return res.status(500).json({ message: "Session error" });
            }
            res.status(200).json({
                message: "Login Successful",
                name: user.name,
                redirectUrl: "http://localhost:3000/bomboozled"
            });
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
            redirectUrl: "http://localhost:3000/bomboozled"
        });
    } catch (error) {
        console.error("Database error:", error);
        res.status(500).json({ message: "Database error" });
    }


});
module.exports = router;
