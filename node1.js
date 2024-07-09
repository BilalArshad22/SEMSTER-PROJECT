const fs = require("node:fs")
const express = require("express")
const mongoose = require("mongoose") // Corrected typo here
const app = express()
const port = 3000
const User = require("./model/user")
app.use(express.urlencoded({extended:true}) )
mongoose.connect("mongodb://:27017/UserDataDB").then(()=>{
    console.log("Database Connected") // Corrected typo here
}).catch((e)=>{
    console.log(e)
    console.log("Database cannot be connected")
})
app.post("/", async(req,res)=>{
    const userData = new User(req.body)
    await userData.save()
}
)
app.get("/",(req,res)=>{
   let a = fx.readFileSync("index.html")
   res.send(a.toString())
})

app.listen(port, ()=>{
    console.log("App running on port", port) // Corrected typo here
})
