import mongoose from "mongoose";

const OrderSchema = mongoose.Schema( {
    userId: {
        type: String,
        required: true
    },
    products: [{
        product : {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Products',
            required: true
        },
        quantity : {
            type : Number,
            required: true
        }
    }],
    totalPrice: {
        type: Number,
        required: true
    },
    orderStatus: {
        type: String,
        enum: ['pending', 'shipped', 'delivered'],
        default: 'pending'
    },

},
    {
        timestamps:true,
    }
    )

// OrderSchema.pre('save', async function (next) {
//     const order = this;
//     order.totalPrice = 0;
//
//     try {
//         for (const product of order.products) {
//             for(const productId of product._id)
//             {
//                 const product = await Product.findById(productId);
//
//                 order.totalPrice += product.disPrice;
//             }
//         }
//
//         next();
//     } catch (error) {
//         next(error);
//     }
// });


export const Order = mongoose.model('Orders', OrderSchema);