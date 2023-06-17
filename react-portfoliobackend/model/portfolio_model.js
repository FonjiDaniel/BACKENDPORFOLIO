const mongoose = require("mongoose");
const portfoliomodel = new mongoose.model("projects" ,  mongoose.Schema({

    _id: String,
    image: String,
    title: String,
    github: String,
	demo: String,

}))


module.exports ={
    portfoliomodel
}