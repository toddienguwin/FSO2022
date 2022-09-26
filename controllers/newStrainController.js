const Strain = require('../models/Strain')

module.exports = async (request, response) => {
    try{
        const strain = await Strain.create({...request.body})
        response.status(200).send(`Successfully inserted doc ${strain._id} into the database`)
    } catch(e){
        response.status(500).json({newStrainError: e.message})
    }

}