const express = require('express')
const Strain = require('../models/Strain')
const router = express.Router()


router.get('/info', async (request, response) => {
    try{
        await Strain.find({}).exec( (err, docs) => {
            if(err){
                response.status(400).json({mongooseError: err.message})
            }
            if(docs){
                response.send(`StrainBook has info for ${docs.length} strains. This request was retrieved on ${new Date().toLocaleString()}`)
            }
        })
    }catch (e){
        response.status(500).json({infoError: e.message})
    }
})

module.exports = router