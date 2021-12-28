import express from "express";

import {FoodModel} from "../../database/allModels";

const RRouter = express.Router();

/*
Route                /
Des                 Get all the foods based on particular restaurants
params               _id
access              public
method              get
*/

Router.get("/:_id", async(req,res)=> {
  try {
      const {_id} = req.params;
      const foods= await FoodModel.find({restaurant:_id});
      return res.json({foods});
  } catch(error) {
    return res.status(500).json({error: error.message});
  }
});

/*
Route                /r
Des                 Get all the foods based on particular category
params              category
access              public
method              get
*/

Router.get("/r/:category", async(res,req)=> {
  try {
    const {category} = req.params;
    const foods = await FoodModel.find({
      category: {$regex: category, $options: "i"}
    });
    return res.json({foods});
  } catch (error) {
    return res.status(500).json({error: error.message});
  }
});

export default Router;
