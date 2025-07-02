
import mongoose from "mongoose";
import { Schema } from "mongoose";


const a = new Schema({
    fname:String,
    age:Number,
    isMarried:Boolean,
    hobby:[String]

})

const schemas =mongoose.models.tag6 || mongoose.model("tag6",a)

export default schemas