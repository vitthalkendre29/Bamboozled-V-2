const express = require("express");
const path = require("path");
const router = express.Router();
const session = require("express-session");
const { connectDB } = require("./db"); // Import the database connection
const MongoStore = require("connect-mongo");

const MONGO_URI = "stringurl"; // Replace with your MongoDB connection string

// Session configuration
router.use(
  session({
    name: "bomboozledSession",
    secret: "vicky", // Replace with a strong, random secret
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: MONGO_URI,
      dbName: "studentinfo",
      collectionName: "sessions",
      ttl: 30 * 60 , // 1 day session expiration (86,400 seconds)
    }),
    cookie: { 
      secure: false, // Secure in production
      httpOnly: true,
      sameSite: "lax",
    },
  })
);

// Middleware to track the last visited page
function trackLastPage(req, res, next) {
  if (req.session.user) {
    req.session.lastPage = req.path;
  }
  next();
}

// Middleware to enforce returning to the last visited page (only for GET requests)
function enforceLastPage(req, res, next) {
  if (
    req.session.user &&
    req.session.lastPage &&
    req.path !== req.session.lastPage &&
    req.method === "GET"
  ) {
    return res.redirect(req.session.lastPage);
  }
  next();
}

// Middleware to check if the user is authenticated
function isAuthenticated(req, res, next) {
  if (req.session.user) {
    return next();
  }
  return res
    .status(403)
    .json({ message: "Access denied. Please log in or register." });
}

function checkresult(req, res, next) {
  if (!req.session.user) {
    return res.status(403).json({ message: "Access denied. Please log in or register." });
  }

  if (req.session.user.email === "kendrevitthal225@gmail.com") {
    return next();
  }
  
  return res.status(403).json({ message: "Access denied." });
}

// Middleware to prevent logged-in users from accessing login/register pages
function preventAuthPages(req, res, next) {
  if (req.session.user) {
    return res.redirect(req.session.lastPage || "/bomboozled");
  }
  next();
}

// Static page routes
router.get("/instructions", isAuthenticated, trackLastPage, (req, res) => {
  res.sendFile(path.join(__dirname, "public", "bamboozled-game-simplified.html"));
});

router.get("/bomboozled", isAuthenticated, trackLastPage, (req, res) => {
  res.sendFile(path.join(__dirname, "public", "main.html"));
});

router.get("/register", preventAuthPages, (req, res) => {
  res.sendFile(path.join(__dirname, "public", "from.html"));
});

router.get("/",preventAuthPages,(req, res) => {
  res.sendFile(path.join(__dirname, "public", "dashboard.html"));
});

router.get("/final", isAuthenticated, trackLastPage, (req, res) => {
  res.sendFile(path.join(__dirname, "public", "final.html"));
});

router.get("/loginpage", preventAuthPages, (req, res) => {
  res.sendFile(path.join(__dirname, "public", "login.html"));
});
router.get("/result", checkresult ,(req, res) => {
  res.sendFile(path.join(__dirname, "public", "bamboozled-accuracy-checker.html"));
});

// Apply enforceLastPage middleware globally (affects only GET requests due to condition)
router.use(enforceLastPage);

// Logout route
router.post("/logout", async (req, res) => {
  console.log("Logout request received");
  req.session.destroy((err) => {
    if (err) {
      console.error("Error destroying session:", err);
      return res.status(500).json({ message: "Error logging out" });
    }
    res.clearCookie("bomboozledSession");
    console.log("Session destroyed and cookie cleared");
    res
      .status(200)
      .json({ message: "Logout successful", redirectUrl: "/" });
  });
});

// Login route with input validation
router.post("/login", async (req, res) => {
  const { email, contactNumber } = req.body;

  // Check for presence of required fields
  if (!email || !contactNumber) {
    return res
      .status(400)
      .json({ message: "Email and contact number are required" });
  }


  try {
    const { collection } = await connectDB();
    const user = await collection.findOne({
      email: email,
      contactno: contactNumber,
    });

    if (!user) {
      return res.status(404).json({
        message: "User not found. Please register or check your details.",
      });
    }

    req.session.user = {
      name: user.name,
      email: user.email,
    };

    req.session.save(err => {
      if (err) {
          console.error("Session save error:", err);
          return res.status(500).json({ message: "Session error" });
      }
      res.status(200).json({
          message: "Login Successful",
          name: user.name,
          redirectUrl: "https://bamboozled-v-2.vercel.app/instructions"
      });
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error during login" });
  }
});

// Registration route with input validation
router.post("/data", async (req, res) => {
  const { playerName, contactNumber, emailAddress, college, otherCollegeName } =
    req.body;

  try {
    const { collection } = await connectDB();

    const existingStudent = await collection.findOne({ email: emailAddress });
    if (existingStudent) {
      return res.status(400).json({
        message: "You are already registered with this email.",
      });
    }

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
      email: emailAddress,
    };

    res.status(201).json({
      message: "Registration Successful",
      studentId: result.insertedId,
      redirectUrl: "/instructions", // Relative URL
    });
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).json({ message: "Database error" });
  }
});

module.exports = router;