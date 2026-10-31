const express = require("express");
const authRouter = require("./Routes/auth.routes");
const app = express();
const cookie = require('cookie-parser')

app.use(express.json())
app.use(cookie())
app.use('/api/user',authRouter);


module.exports= app;