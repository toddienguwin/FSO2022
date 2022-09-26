const Strain = require('../models/Strain')
module.exports = async (request, response) => {
    try{
        
        await Strain.findById(request.params.id).exec( (err, doc) => {
            if(err){
                response.status(400).json({mongooseError: 'INVALID ID'})
                //should just redirect to main page or something 
            } 
            if(doc){
                response.status(200).json({...doc['_doc']})
            }
        })
        
    } catch (e){
        response.status(500).json({singleStrainError: e.message})
    }

}