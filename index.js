const express = ("express");
const app = express();
const mongoose = require ("mongoose");
const {MONG0_DB_CONFIG} = require("./config/App.config");
const cors = require('cors');

//CONNECTION TO MONGODB

mongoose.connect(MONG0_DB_CONFIG, {

    useNewUrlParser: true,
    useUnitffieldTopology: true
}).then(() => {

    console.log('connection to mongoDB successful');
}).catch((error) => {
    console.log('Error connecting to MomgoDb'  ,error);

});

//Enable cors
app.use(cors());

//Middleware to parse JSON data
app.use(express.json());

//Define a route to fetch the data
app.use("/api", require("./router"));

//start the server
app.listen(8000, () => {

    console.log("Server started on port 8000");


});


    