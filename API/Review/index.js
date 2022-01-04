import express from "express";

import {ReviewModel} from "../../database/allModels";

const Router = express.Router();

/*
Route                /
Des                 add new review
params              none
access              public
method             post
*/

Router.post("/new", async(req,res)=> {
  try {
    const {reviewData} = req.body;

    await ReviewModel.create(reviewData);

    return res.json({review: "Successfully created review"});
  } catch(error) {
    return res.status(500).json({error: eroor.message});
  }
});

/*
Route                /delete
Des                delete a review
params               _id
access              public
method             delete
*/

Router.delete("/delete/:_id", async(req,res)=> {
  try {
    const {_id} = req.params;

  await ReviewModel.findByIdAndDelete(_id);

    return res.json({review: "Successfully deleted review"});
  } catch(error) {
    return res.status(500).json({error: eroor.message});
  }
});

export default Router;
