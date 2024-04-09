const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const morgan = require('morgan');
const connectDB = require('./config/connection');
const chatRoutes = require("./routes/chatRoutes");
const authRoutes = require('./routes/authRoutes');
const errorHandler = require('./middlewares/error');

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}));
app.use(morgan('dev'));
app.use(errorHandler)
app.use("/", chatRoutes)


const PORT = process.env.PORT || 3000;

// check if you need to add /v1
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
});