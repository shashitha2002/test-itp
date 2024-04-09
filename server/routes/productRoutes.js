import express from "express";
import {Product} from "../models/productModel.js";

const router = express.Router();

//Route to create a product
router.post('/add',async (req,res) => {
    try {

        const newProduct = {
            name :req.body.name,
            description :req.body.description,
            ingredients :req.body.ingredients,
            expireDate :req.body.expireDate,
            manufactureDate :req.body.manufactureDate,
            price :req.body.price,
            discount : req.body.discount,
            disPrice : req.body.price,
            imageUrl : req.body.imageUrl
        }

        const product =await Product.create(newProduct);

        res.status(201).send(product);

    }catch (error) {
        console.log(error);
        res.status(500).send({message:error.message});
    }
})

//show all the products
router.get('/all',async (req,res) => {
    try {
        const products = await Product.find({});

        res.status(200).json({
            count:products.length,
            data:products
        });

    }catch (error) {
        console.log(error);
        res.status(500).send({message:error.message});
    }
})


//show one product using product ID
router.get('/:id',async (req,res) => {
    try{
        const {id} =req.params;
        const product = await Product.findById(id);

        res.status(200).json(product);

    }catch (error) {
        console.log(error);
        res.status(500).send({message:error.message});
    }
})

//Update a product by ID
router.put('/edit/:id',async (req,res) => {
    try {

        if(
            !req.body.name ||
            !req.body.description ||
            !req.body.ingredients ||
            !req.body.expireDate ||
            !req.body.manufactureDate ||
            !req.body.price
        ){
            return res.status(400).send({message:"all the fields required"});
        }

        const{id} = req.params;

        const result = await Product.findByIdAndUpdate(id,req.body);

        if(!result){
            return res.status(400).send({message:"Product cannot be found"})
        }

        return res.status(200).send({message:"Product has been updated successfully"})

    }catch (error) {
        console.log(error);
        res.status(500).send({message:error.message});
    }
})

//delete a product
router.delete('/delete/:id', async (req,res) => {
    try {
        const{id} = req.params;

        const result = await Product.findByIdAndDelete(id);

        if (!result){
            return res.status(400).send({message:"Product cannot be found"})
        }

        return res.status(200).send({message:"Product deleted successfully"})

    }catch (error) {
        res.status(500).send({message:error.message})
    }
})

//update the discounted price according to the Discount
router.put('/discount/:id',async (req,res) => {
    try {
        // Validate request body
        if (!req.body.discount) {
            return res.status(400).send({ message: "Missing required field: discount" });
        }

        const { id } = req.params;

        // Find the product by ID
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).send({ message: "Product not found" });
        }


        const discountAmount = (product.price * req.body.discount) / 100;
        product.disPrice = product.price - discountAmount;
        product.discount = req.body.discount;

        await product.save();

        res.status(200).send({ message: "Product updated successfully", product });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Server error" });
    }
})

export default router;