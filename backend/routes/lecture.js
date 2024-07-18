const express = require("express")
const router = express.Router()
const { assignCourse,getAlllecture, instructorLecture } = require("../controller/lecture")

router.post("/assigncourse",assignCourse)
router.get("/getAlllecture",getAlllecture)
router.get("/instructorLecture/:instructorId",instructorLecture)
module.exports = router