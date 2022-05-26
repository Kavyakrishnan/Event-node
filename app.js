const Express=require("express")
const Mongoose=require("mongoose")
const Bodyparser=require("body-parser")
const { default: mongoose } = require("mongoose")



var app=Express()
app.use(Bodyparser.urlencoded({extended:true}))
app.use(Bodyparser.json())
var EventModel=Mongoose.model("events",
new mongoose.Schema(
    {
        name:String,
        date:String,
        venue:String,
        organiser:String,
        contactno:String,
    }
))
Mongoose.connect("mongodb+srv://gopika:1234@cluster0.2q4qp.mongodb.net/eventappdb")
app.post("/api/event",(req,res)=>{
    var data=req.body
  let ob=new EventModel(data)
  ob.save((error,data)=>{
      if(error){
      res.send({"status":"error","error":error})
          

      }
      else
      {
res.send({"status":"success","data":data})
      }
  })
})
app.listen(4000,()=>{
    console.log("server is running")
})