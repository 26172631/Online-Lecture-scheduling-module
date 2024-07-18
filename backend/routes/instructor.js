const express = require("express")
const router = express.Router()
const { createInstructor, getAllInstructor, instructorLogin } = require("../controller/instructor")

router.post("/createinstructor",createInstructor)
router.post("/instructorLogin",instructorLogin)
router.get("/getallInstructor",getAllInstructor)
module.exports = router