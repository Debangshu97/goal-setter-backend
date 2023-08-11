const express = require("express");
const dotenv= require("dotenv").config();
const {errorHandler} = require("./middleware/errorMiddleware");
const colors=require("colors");
const port=process.env.PORT || 0;
const connectDB = require("./config/db");

connectDB()

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/goals',require("./routes/goalRoutes"));
app.use(errorHandler)



app.listen(port, function() {
    console.log("server started on port 5000");
})