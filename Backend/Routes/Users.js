const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs")
const cors = require("cors");

const db= []


router.use(express.json());
router.use(cors());



router.post("/register", async (req, res) => {
    const { username,email,password } = req.body;
    console.log(req.body)
    const user= db.find(u=>u.username === username)
    if (user){
        return res.json({message:"User already existing"})
    }


    const salt= bcrypt.genSaltSync(13);
    const hash = bcrypt.hashSync(password,salt);
    db.push({username:username,email:email,password:hash})
    console.log(db)
    return res.json(db);
  });
  

router.post("/login", async(req,res)=>{
  const {username,password} = req.body;
  console.log(req.body)
  const user= db.find(u=>u.username === username)
  if (!user){
    return res.json({message:'no user'})
  }

  const isValid= bcrypt.compareSync(password,user.password)
  if (!isValid){
    return res.send({message:"Mauvais mdp"})
  }
  return res.json({message:"tout est ok"})

  })








module.exports= router