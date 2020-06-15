const express = require("express");

const app = express()
const PORT = process.env.port || 5000

app.get("/", (req, res) => {res.send(`API running`)})

app.listen(PORT, () => console.log(`Server is up and running on port ${PORT}`))