import express from "express";
import AWS from "aws-sdk";
import multer from "multer";

import { ImageModel} from "../../database/allModels";

import {s3Upload} from "../../Utils/AWS/s3";

const Router = express.Router();

//Multer Config
const storage = multer.memoryStorage();
const upload = multer({storage});

/*
Route                /
Des                 uploading the given to aws s3 bucket and then saving
params               none
access              public
method              post
*/


Router.post("/",upload.single{"file"}, async(req,res)=> {
  try {
    const file = req.file;
    const bucketOptions = {
      Bucket: "shapeaioctoberbatch123",
      key: file.originalname,
      Body: file.buffer,
      ContentType: file.mimetype,
      ACL: "public-read"
    };

const uploadImage = await s3Upload(bucketOptions);
return res.status(200).json({uploadImage});

  } catch (error) {
    return res.status(500).json({error: error.meassage});
  }
});

export default Router;
