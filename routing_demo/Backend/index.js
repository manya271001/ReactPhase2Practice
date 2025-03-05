const express=require('express')
const app=express();
const port=3000;
const cors = require('cors');

//Enable CORS
app.use(cors());

const userList=[
    {id:101,firstName:"Akash",lastName:"gupta"},
      {id:102,firstName:"Manya",lastName:"Sharma"},
        {id:103,firstName:"Anshita",lastName:"Dilraj"},
          {id:104,firstName:"Prachi",lastName:"Kumari"}
]

app.get('/users',(req,res)=>{
    res.json(userList);
})

app.listen(port,()=>{
    console.log(`server runnit at http://localhost:${port}`)
})