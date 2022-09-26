const express = require('express')

const router = express.Router() 

const strainController = require('../controllers/allController')
router.get('/strains', strainController)

const singleStrainController = require('../controllers/singleStrainController')
router.get('/strains/:id', singleStrainController)

const newStrainController = require('../controllers/newStrainController')
router.post('/strains', newStrainController)

const deleteStrainController = require('../controllers/deleteStrainController')
router.delete('/strains/:id', deleteStrainController)

//replaces the entire identified resource with the request data 
// router.put('/strains/:id', (request, response) => {

// })

// //replaces a part of the identified resource with the request data. 
// router.patch('/strains/:id', (request, response) => {

// })
module.exports = router