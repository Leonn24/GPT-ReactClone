const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const connectDB = require('./config/connection')

const chatRoutes = require("./routes/chatRoutes");
dotenv.config();

//connectDB();


const app = express();
app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}));
app.use("/", chatRoutes)


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
});