import mongoose from "mongoose";
import {Product} from "./productModel.js";

const OrderSchema = mongoose.Schema( {
    userId: {
        type: String,
        required: true
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    }],
    totalPrice: {
        type: Number,
        required: true
    },
    orderStatus: {
        type: String,
        enum: ['pending', 'shipped', 'delivered', 'canceled'],
        default: 'pending'
    },

},
    {
        timestamps:true,
    }
    )

OrderSchema.pre('save', async function (next) {
    const order = this;
    order.totalPrice = 0;

    try {
        for (const productId of order.products) {
            const product = await Product.findById(productId);
            if (!product) {
                throw new Error(`Product with ID ${productId} not found.`);
            }
            order.totalPrice += product.disPrice;
        }

        next();
    } catch (error) {
        next(error);
    }
});


export const Order = mongoose.model('Orders', OrderSchema);