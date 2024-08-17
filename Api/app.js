// THIS IS WERE WE ARE RUNNING OUR EXPRESS FILES
import express from "express";
import postRoute from "./routes/post.route.js";
import authRoute from "./routes/auth.route.js";

const app = express();
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

app.use("/api/test", (req, res) => {
    res.send("This is a test route");
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});