const express = require("express");
const connectDB = require("./config/db");

const app = express()
connectDB()
const PORT = process.env.port || 5000
app.use(express.json({extended: false}));

app.get("/", (req, res) => {res.send(`API running`)})

app.use("/api/users", require("./routes/api/users"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/auth", require("./routes/api/auth"));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))