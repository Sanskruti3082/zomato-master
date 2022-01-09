import express from "express";
import AWS from "aws-sdk";
import multer from "multer";

import { ImageModel} from "../../database/allModels";

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
