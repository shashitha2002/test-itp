import express from "express";
import {Order} from '../models/orderModel.js'
import {Product} from "../models/productModel.js";


const router = express.Router();

router.post('/add',async (req,res) => {
    try {

        const newOrder = {
            userId :req.body.userId,
            products :req.body.cart,
            totalPrice :req.body.total,
            orderStatus :req.body.orderStatus,

        }
        console.log(newOrder)
        const order =await Order.create(newOrder);

        res.status(201).send(order);

    }catch (error) {
        console.log(error);
        res.status(500).send({message:error.message});
    }
})

//show all the products
router.get('/all',async (req,res) => {
    try {
        const orders = await Order.find().populate({path:'products.product'});

        res.status(200).json({
            count:orders.length,
            data:orders
        });

    }catch (error) {
        console.log(error);
        res.status(500).send({message:error.message});
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
        const order = await Order.findById(id);

        if(!order) {
            res.status(404).send({message:"Order can not be found"});
        }

        res.status(200).json(order);

    }catch (error) {
        console.log(error);
        res.status(500).send({message:error.message});
    }
})


//Update an order
router.put('/edit/:id', async (req, res) => {
    try {
        const { id } = req.params;

        if (!req.body.products || !Array.isArray(req.body.products)) {
            return res.status(400).send({ message: "Invalid products data" });
        }

        let totalPrice = 0;
        for (const productId of req.body.products) {
            const product = await Product.findById(productId);
            if (!product) {
                return res.status(400).send({ message: `Product with ID ${productId} not found` });
            }
            totalPrice += product.disPrice;
        }

        req.body.totalPrice = totalPrice;

        const result = await Order.findByIdAndUpdate(id, req.body);

        if (!result) {
            return res.status(404).send({ message: "Order not found" });
        }

        return res.status(200).send({ message: "Order updated successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Internal server error" });
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