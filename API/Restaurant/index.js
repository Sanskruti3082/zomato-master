import express from "express";

import {RestaurantModel} from "../../database/allModels";
import {ValidateRestaurantCity, ValidateRestaurantSearchString} from "../../validation/restaurant";
import {ValidateRestaurantId} from "../../validation/food";
const Router = express.Router();

/*
Route                /
Des                 Get all the restaurant details
params               none
access              public
method              get
*/

Router.get("/", async(req,res)=> {
  try {
    await ValidateRestaurantCity(req.query);
     const {city} = req.query;
     const restaurants = await RestaurantModel.find({city});
     return res.json({restaurants});
  } catch(error) {
    return res.status(500).json({error: eroor.message});
  }
});

/*
Route                /
Des                 Get a particular  details  on id
params               _id
access              public
method              get
*/

Router.get("/:_id", async(req,res)=> {
  try {
    await ValidateRestaurantId(req.params);
     const {_id} = req.params;
     const restaurant = await RestaurantModel.find({_id});
     return res.json({restaurant});
  } catch(error) {
    return res.status(500).json({error: eroor.message});
  }
});

/*
Route                /search
Des                 Get particular restaurant based on id
params               searchString
access              public
method              get
*/

Router.get("/search", async(req,res)=> {
  try {
    await ValidateRestaurantSearchString(req.body);
     const {searchString} = req.body;
     const restaurants = await RestaurantModel.find({
       name: {$regex: searchString, $options: "i"}
     });
     return res.json({restaurants});
  } catch(error) {
    return res.status(500).json({error: eroor.message});
  }
});

export default Router;
