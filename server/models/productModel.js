import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    description:{
        type:String,
        required:true
    },

    ingredients:{
        type: String,
        required:true
    },

    expireDate:{
        type:Date,
        required:true
    },

    manufactureDate:{
        type:Date,
        required:true
    },

    price:{
        type:Number,
        required:true
    },

    discount: {
        type:Number,
        required:true
    },

    disPrice:{
        type:Number,
        required:true
    },

    imageUrl: {
        type: String,
    }
},
    {
        timestamps:true,
    }
    );

export const Product = mongoose.model('Products', productSchema)