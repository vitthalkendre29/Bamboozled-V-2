const express = require("express");
const path = require("path");
const router = express.Router();
const session = require("express-session");
const { MongoClient } = require("mongodb");
const MongoStore = require("connect-mongo");
const cors = require("cors");

const MONGO_URI = "mongodb+srv://vicky:vicky123@autorest.xacrthx.mongodb.net";
const DB_NAME = "studentinfo";
const COLLECTION_NAME = "students";

// ** Database Connection Function **
async function connectDB() {
  const client = new MongoClient(MONGO_URI);
  await client.connect();
  const db = client.db(DB_NAME);
  return { collection: db.collection(COLLECTION_NAME) };
}

// ** Middleware: CORS Setup (if frontend is on a different origin) **
router.use(
  cors({
    origin: "http://your-frontend-domain.com", // Update with frontend URL
    credentials: true,
  })
);

// ** Session Configuration **
router.use(
  session({
    name: "bomboozledSession",
    secret: "your_strong_secret_here",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: MONGO_URI,
      dbName: DB_NAME,
      collectionName: "sessions",
      ttl: 24 * 60 * 60, // 1 day session expiration
    }),
    cookie: {
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
      sameSite: "lax",
    },
  })
);

// ** Middleware: Check Authentication **
function isAuthenticated(req, res, next) {
  if (req.session.user) {
    return next();
  }
  return res.status(403).json({ message: "Access denied. Please log in." });
}

// ** Login Route (Fixed Field Names) **
router.post("/login", async (req, res) => {
  const { email, contactNumber } = req.body;

  // ** Validate Inputs **
  if (!email || !contactNumber) {
    return res.status(400).json({ message: "Email and contact number required" });
  }

  try {
    const { collection } = await connectDB();
    
    // ** Ensure database field names match **
    const user = await collection.findOne({
      emailAddress: email, // FIX: Changed from `email` to `emailAddress`
      contactno: contactNumber,
    });

    if (!user) {
      return res.status(404).json({ message: "User not found. Please register." });
    }

    // ** Set session data **
    req.session.user = {
      name: user.name,
      email: user.emailAddress, // Ensure consistent field name
    };

    req.session.save((err) => {
      if (err) {
        console.error("Session save error:", err);
        return res.status(500).json({ message: "Session error" });
      }
      res.status(200).json({
        message: "Login Successful",
        name: user.name,
        redirectUrl: "/bomboozled",
      });
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error during login" });
  }
});

// ** Logout Route (Clears Session) **
router.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error("Error destroying session:", err);
      return res.status(500).json({ message: "Logout error" });
    }
    res.clearCookie("bomboozledSession");
    res.status(200).json({ message: "Logout successful", redirectUrl: "/loginpage" });
  });
});

// ** Registration Route (Ensuring Consistent Field Names) **
router.post("/data", async (req, res) => {
  const { playerName, contactNumber, emailAddress, college, otherCollegeName } = req.body;

  // ** Validate Inputs **
  if (!playerName || !contactNumber || !emailAddress || !college) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const { collection } = await connectDB();

    const newStudent = {
      name: playerName,
      contactno: contactNumber,
      emailAddress: emailAddress, // FIX: Use consistent field name
      college: college,
      collegename: otherCollegeName || null,
    };

    const result = await collection.insertOne(newStudent);

    req.session.user = {
      name: playerName,
      email: emailAddress,
    };

    res.status(201).json({
      message: "Registration Successful",
      studentId: result.insertedId,
      redirectUrl: "/bomboozled",
    });
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).json({ message: "Database error" });
  }
});

module.exports = router;
