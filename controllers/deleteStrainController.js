const Strain = require('../models/Strain')

module.exports = async (request, response) => {
    try{
     const result = await Strain.findByIdAndDelete(request.params.id)
     response.status(204).end()
    } catch (e) {
     response.status(500).json({deleteStrainError: e.message})
    }
 }