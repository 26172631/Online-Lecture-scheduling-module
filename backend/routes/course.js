const express = require("express")
const router = express.Router()
const { createCourse, getAllCourse } = require("../controller/course")

router.post("/createcourse",createCourse)
router.get("/getallcourse",getAllCourse)
module.exports = router