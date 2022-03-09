import express from "express";
import bodyParser from "body-parser";
import accountRoutes  from './routes/account.js';

// create our express app
const app = express();
// middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
// route

app.use('/', accountRoutes)

//start server
app.listen(3000, ()=>{
    console.log("listeniing at port:3000")
}) 