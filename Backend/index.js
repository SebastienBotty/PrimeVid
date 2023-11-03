const express = require("express");


const app = express();
const port= 3001

const userRoute= require('./Routes/Users')


app.use('/user',userRoute)






app.listen(port, ()=>console.log("listening on port " + port));
