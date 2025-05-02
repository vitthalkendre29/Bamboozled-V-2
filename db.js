const { MongoClient } = require("mongodb");

// Use environment variables for sensitive connection information
const uri =  "mongodb+srv://vicky:vicky123@autorest.xacrthx.mongodb.net";

// Create a global client variable
let mongoClient;

async function connectDB() {
    try {
        // Check if client is already connected to avoid multiple connections
        if (!mongoClient) {
            mongoClient = new MongoClient(uri, {
                // Add connection options for better security and performance
                useNewUrlParser: true,
                useUnifiedTopology: true,
                serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds
                socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
            });

            await mongoClient.connect();
            console.log("Connected to MongoDB Atlas");
        }

        // Select database and collection
        const database = mongoClient.db("studentinfo");
        const collection = database.collection("student");

        return { client: mongoClient, database, collection };
    } catch (error) {
        console.error("MongoDB connection error:", error);
        throw error; // Re-throw to allow proper error handling in routes
    }
}

// Add a cleanup function to close the connection
async function closeDBConnection() {
    if (mongoClient) {
        await mongoClient.close();
        console.log("MongoDB connection closed");
        mongoClient = null;
    }
}

module.exports = {
    connectDB,
    closeDBConnection
};