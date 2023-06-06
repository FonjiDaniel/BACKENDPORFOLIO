const {portfolioModel}= require("../model/porfolo_model");
const {testimonialModel} = require ("../modeltestimonial_mosel") ;

exports.portfolioAppRoute = async (req, res)=>{

    try{
        items = await portfolioModel.find({});
        return res.status(200).send({
            message: "success",
            data: item

        })

    }catch(error){
        res.status(500).json(({error: "internal server e"}));

    }
}
exports.testimonialAppRoute = async (req, res)=>{

    try{
        items = await portfolioModel.find({});
        return res.status(200).send({
            message: "success",
            data: item

        })

    }catch(error){
        res.status(500).json(({error: "internal server e"}));

    }
}