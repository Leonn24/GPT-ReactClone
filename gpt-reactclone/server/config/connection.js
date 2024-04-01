const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log(`Connected to MongoDB ${mongoose.connection.host}`)
    } catch(err) {
        console.log(`MongoDB database error ${err}`)
    }
}

module.exports = connectDB;