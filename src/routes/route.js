const express = require('express')
const router =express.Router()


const collegeController = require('../controllers/collegeController')
const internController = require('../controllers/internController')
//const collegeDetailsController =require('../controllers/collegeDetailsController')




router.post("/functionup/colleges",collegeController.createCollege)
router.post("/functionup/interns",internController.createInterns)
router.get("/functionup/details",internController.giveAllInterns)











module.exports=router;