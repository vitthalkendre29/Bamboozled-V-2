const { connectDB } = require("../db");

async function checkUserRegistration(req, res, next) {
  const { emailAddress } = req.body;

  if (!emailAddress) {
    return res.status(400).json({ message: "Email address is required" });
  }

  try {
    const { collection } = await connectDB();
    const user = await collection.findOne({ email: emailAddress });

    if (!user) {
      return res.status(401).json({ message: "User not registered" });
    }

    next(); // User is registered, proceed to the next middleware or route handler
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).json({ message: "Database error" });
  }
}

module.exports = checkUserRegistration;
