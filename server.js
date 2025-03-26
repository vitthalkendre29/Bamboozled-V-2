const express = require('express');
const path = require('path');
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./routes");
const {connectDB, closeDBConnection } = require("./db");



const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));


// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

app.use("/", routes);


// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// Graceful shutdown
process.on('SIGINT', async () => {
    console.log('Closing server and database connection...');
    server.close();
    await closeDBConnection();
    process.exit(0);
});

module.exports = app;