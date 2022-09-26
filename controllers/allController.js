const Strain = require('../models/Strain')
const path = require('path')
module.exports = async (request, response) => {
   try{
    const strain = await Strain.find({}).exec( (err, docs) => {
        if(err){
            response.status(400).json({mongooseError: err.message})
        }
        if(docs){
            //console.log(JSON.stringify(docs, null, 4))
            response.status(200).json({...docs})
        }
    })
   } catch (e){
    response.status(500).json({GetError: e.message})
   }
}