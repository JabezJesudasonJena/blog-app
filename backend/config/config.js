const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MOGO_URI);
        console.log("The Backend has been connnected ! ");
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
    
} 
module.exports = connectDB;