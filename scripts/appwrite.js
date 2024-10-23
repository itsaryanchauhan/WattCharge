// appwrite.js
const sdk = require("node-appwrite");

const client = new sdk.Client();
const databases = new sdk.Databases(client);

// Initialize client
client
    .setEndpoint("https://cloud.appwrite.io/v1") // Your Appwrite endpoint
    .setProject("67191a4c0004c1f33480"); // Your project ID

// Export the databases instance for use in other files
module.exports = { databases, client };
