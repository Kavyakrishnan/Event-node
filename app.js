const Express=require("express")
const Mongoose=require("mongoose")
const Bodyparser=require("body-parser")
const res=require("express/lib/response")
const req=require("express/lib/request")
var app=Express()
app.use(Bodyparser.urlencoded({extended:true}))
app.use(Bodyparser.json())
var collegemodel=Mongoose.model("colleges",new Mongoose.Schema(
{

name:String,
date:String,
venue:String,
organiser:String,
contactNo:String

}    
))
app.post("/eventapp",(req,res)=>{
var getName=req.body.name
var getDate=req.body.date
var getVenue=req.body.venue
var getOrganiser=req.body.organiser
var getContactNo=req.body.ContactNo
data={"name":getName,"date":getDate,"venue":getVenue,"organiser":getOrganiser,"contactNo":getContactNo}
})
let mycollege=new collegemodel(data)
mybus.save((error,data)=>{
mycollege.save((error,data)=>{
        if(error){
            res.sendStatus({"status":"error","data":error})
        }
        else{
            res.sendStatus({"status":"success","data":data}) 
        }
     } )



     res.send(data)
})
app.listen(5021,()=>{
    console.log("successed")
})