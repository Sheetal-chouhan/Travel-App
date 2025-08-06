const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async() => {
    try{
        await mongoose.connect(process.env.DATABASE_URL);
        console.log("Connected to MongoDB successfully!")// ({
            
        //     useNewUrlParser: true,
        //     useunifiedTopology: true,
        //  }) 
    }
    catch(err) {
        console.log( err);
        // res.status(500).json({ message: "Could not add data to DB", err: err.message });
      }

}

module.exports = connectDB;

