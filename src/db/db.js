const mongoose = require("mongoose");

async function connectDB() {
    try {
        await mongoose.connect(process.env.Mongo_Uri);
        console.log("Database Connected Successfully");
    } catch (error) {
        console.log("Database Connection Error:", error.message);
        throw error;
    }
}

module.exports = connectDB;