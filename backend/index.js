const express = require('express');
require('./server')

const cors = require('cors');

const app = express();
app.use(express.json())
app.use(cors())


app.post('/addregister', async (req,res)=>{
    // console.log()
    let data =   (req.body)
     let result= await data.save();
     res.send(result)
    console.log(result)
    // res.send("data save")
})

app.listen(4300)