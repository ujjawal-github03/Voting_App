// To make server
const express = require("express");
const app = express();
require('dotenv').config();
const bodyParser=require('body-parser');
app.use(bodyParser.json()); // and then it will be stored in req.body
const PORT=process.env.PORT || 3000;
console.log("Server is live");
app.listen(PORT,()=>
{
  console.log(`Serever is live and listening to ${PORT}`);
});