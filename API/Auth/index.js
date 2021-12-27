import express from "express";
import bcrypt from "bcryptjs";

//Models
import {UserModel} from "../../database/user";
const Router = express.Router();

/*
Route                 /signup
Des                    signup using email and password
Params                 None
Access                 Public
Method                Post
*/

Router.post("/signup", async(req,res)=> {
  try {
    const {email, password, fullname, phoneNumber} = req.body.credentials;

    const checkUserByEmail =await UserModel.findOne({email});
    const checkUserByPhone = await UserModel.findOne({phoneNumber});


    if(chechUserByEmail || checkUserByPhone) {
      return res.json({error: "User already exists"});
    }

//hashing ur password
    const bcryptSalt = await bcrypt.genSalt(8);
    const hashedPassword = await bcrypt.hash(password, bcryptSalt);

//save to // DB
await UserModel.create({
  ...req.body.credentials,
  password: hashedPassword
});

  //JWT Token
    const token = jwt.sign({user: {fullname, email}}, "Zomato App")

    return res.status(200).json({token, status: "success"});
  } catch (error) {
    return res.status(500).json({error: console.error(.message)});
  }
});

//xyz555 -> hfhaFu%&v12**hvj -> vhgk -> ggkj
