import express from "express";

import {UserModel} from "../../database/allModels";

const Router = express.Router();

/*
Route                /
Des                 Get alluser data
params               _id
access              public
method              get
*/

Router.get("/:_id", async(req,res)=> {
  try {
    const {_id} = req.params;
    const getUser = await UserModel.findById(_id);
    return res.json({user: getUser});
  } catch(error) {
    return res.status(500).json({error: eroor.message});
  }
});

/*
Route                /update
Des                 update the user data
params              userId
access              public
method              put
*/

Router.get("/update/:userId", async(req,res)=> {
  try {
     const {userId} = req.params;
     const {userData} = req.body;
     const updateUserData = await UserModel.findByIdAndUpdate(
       userId,
       {
         $set: userData
       },
       {new: true}
     );

     return res.json({user:updateUserData});
  } catch(error) {
    return res.status(500).json({error: eroor.message});
  }
});

export default Router;
