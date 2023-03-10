const express = require("express");
const app = express();
const blogRouter = require("./routes/BlogRoutes");
//middleware
app.use(express.json());
app.use("/api/blogs", blogRouter);
app.listen(3001, () => {
    console.log("Server is running on port 3001");
});

const mongoose = require("mongoose");
//configure mongoose
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/CRUD",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Connected to MongoDB");
        }
    }
);

module.exports = app;