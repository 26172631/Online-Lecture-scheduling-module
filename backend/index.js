const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const app = express()
app.use(express.json())
app.use(cors({
    origin: "https://online-lecture-scheduling-module.netlify.app"
}));
app.use("/instructor",require("./routes/instructor"))
app.use("/course",require("./routes/course"))
app.use("/lecture",require("./routes/lecture"))
const port = 4000

mongoose.connect("mongodb+srv://shahidkhan199417:Shahid123@form-validate-db.deeidv6.mongodb.net/?retryWrites=true&w=majority&appName=form-validate-db").then(()=>{
    app.listen(port,()=>{
        console.log(`Server listening on ${port}`)
    })
})
