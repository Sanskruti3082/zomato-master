import express from "express";

import {MenuModel, ImageModel} from "../../database/allModels";

const Router = express.Router();

/*
Route                /list
Des                 Get list of menu based on id
params               -id
access              public
method              get
*/

Router.get("/list/:_id", async(req,res)=> {
  try {
    const {_id} = req.params;
    const menus = await MenuModel.findOne(_id);

    return res.json({menus});
  } catch(error) {
    return res.status(500).json({error: eroor.message});
  }
});

/*
Route                /image
Des                 Get image of menu based on id
params               -id
access              public
method              get
*/

Router.get("/image/:_id", async(req,res)=> {
  try {
    const {_id} = req.params;
    const menus = await ImageModelModel.findOne(_id);

    return res.json({menus});
  } catch(error) {
    return res.status(500).json({error: eroor.message});
  }
});

export default Router;
