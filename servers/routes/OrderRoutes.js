import express from "express";
import {Order} from '../models/orderModel.js'


const router = express.Router();

router.post('/add',async (req,res) => {
    try {

        const newOrder = {
            userId :req.body.userId,
            products :req.body.cart,
            totalPrice :req.body.total,
            address:req.body.DeliveryAddress,
            orderStatus :req.body.orderStatus,

        }
        console.log(newOrder)
        const order =await Order.create(newOrder);

        return res.status(201).send(order);

    }catch (error) {
        console.log(error);
        return res.status(500).send({message:error.message});
    }
})

//show all the orders
router.get('/all',async (req,res) => {
    try {
        const orders = await Order.find().populate({path:'products.product'});

        return res.status(200).json({
            count:orders.length,
            data:orders
        });

    }catch (error) {
        console.log(error);
        return res.status(500).send({message:error.message});
    }
})


// router.get('/sells',async (req,res) => {
//     try {
//         const orderData = await Order.find().populate({path:'products.product'});
//
//         res.status(200).json(orderData);
//
//     }catch (error) {
//         console.log(error);
//         res.status(500).send({message:error.message});
//     }
// })


//view one order by the ID
router.get('/:id',async (req,res) => {
    try {
        const {id} =req.params;
        const order = await Order.findById(id).populate({path:'products.product'});

        if(!order) {
            res.status(404).send({message:"Order can not be found"});
        }

        return res.status(200).json(order);

    }catch (error) {
        console.log(error);
        return res.status(500).send({message:error.message});
    }
})


//Update an order
router.put('/edit/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { userId, total, deliveryAddress, products } = req.body;

        let order = await Order.findById(id);

        if (!order) {
            return res.status(404).send({ message: "Order not found" });
        }

        // Update order fields
        order.userId = userId;
        order.totalPrice = total;
        order.address = deliveryAddress;

        // Update quantities of products
        products.forEach(product => {
            const existingProduct = order.products.find(p => p.product._id.toString() === product.product._id.toString());
            if (existingProduct) {
                existingProduct.quantity = product.quantity;
                order.markModified('products'); // Mark the 'products' array as modified
            }
        });


        // Save the updated order
        order = await order.save();

        return res.status(200).json(order);
    } catch (error) {
        console.error(error);
        return res.status(500).send({ message: error.message });
    }
});

//delete an order
router.delete('/delete/:id',async(req,res) => {
    try {

        const {id} = req.params;

        const result = await Order.findByIdAndDelete(id);

        if(!result) {
           return res.send(404).send({message:"Order con not be found"});
        }

        return res.status(200).send({message:"Order deleted successfully"});

    }catch (error) {
        console.log(error);
        res.status(500).send({ message: "Internal server error" });
    }
})


export default router;