/*const mongoose = require("mongoose");

const stockSchema = mongoose.Schema(
    {
        productID:{
            type:String,
            required:true,
        },

        productName:{
            type:String,
            required:true,
        },


        quantity:{
            type:Number,
            required:true,
        },

    },
    {
        timestamps: true,
    }

);

const Book = mongoose.model('stock',stockSchema);
module.exports  = Book;

*/

const mongoose = require("mongoose");

const stockSchema = mongoose.Schema(
    {
        productID:{
            type:String,
            required:true,
        },

        productName:{
            type:String,
            required:true,
        },

        quantity:{
            type:Number,
            required:true,
        },

        expireDate: {
            type: Date 
        }
    },
    {
        timestamps: true,
    }

);

const Stock = mongoose.model('Stock', stockSchema); // Use singular for the model name, conventionally capitalized
module.exports = Stock;
