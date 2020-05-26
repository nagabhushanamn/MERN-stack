

const express=require('express')
const app=express()


app.get("/courses",(req,res,next)=>{
    let data=[
        "Mongo/MySQL",
        "Express",
        "React",
        "Node.js"
    ]
    res.json(data)
})

app.listen(8080,()=>{
    console.log("server up")
})