const dotnev=require("dotenv");
dotnev.config();

const expresss=require("express");
const app=expresss()


app.get("",(req,res)=>{
    res.send("<h1>Welcome to backend api</h1>")
})
const port=process.env.PORT || 8080

app.listen(port,()=>{
    console.log(`Server listening on http://localhost:${port}`)
})