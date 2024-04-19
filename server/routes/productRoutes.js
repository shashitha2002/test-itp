
import express from "express";
import {Product} from "../models/productModel.js";
import upload from "../multerConfig.js";

const router = express.Router();
/*
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images'); // Specify the destination folder
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // Keep the original filename
    },

    createParentPath: true

});

const upload = multer({ storage: storage });*/

//Route to create a product
router.post('/', upload.single('imageUrl'),async (req,res) => {
    try {
            console.log(req.imageUrl)
        const newProduct = {
            name :req.body.name,
            description :req.body.description,
            ingredients :req.body.ingredients,
            expireDate :req.body.expireDate,
            manufactureDate :req.body.manufactureDate,
            price :req.body.price,
            discount : req.body.discount,
            disPrice : req.body.price,
            imageUrl : req.file.filename
        }

        const product =await Product.create(newProduct);

        res.status(201).send(product);

    }catch (error) {
        console.log(error);
        res.status(500).send({message:error.message});
    }
})

//show all the products
router.get('/',async (req,res) => {
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
router.put('/edit/:id',upload.single('imageUrl'),async (req,res) => {
    try {
        const { id } = req.params;

        // Prepare the update object with the new data
        const updateObj = {
            name: req.body.name,
            description: req.body.description,
            ingredients: req.body.ingredients,
            expireDate: req.body.expireDate,
            manufactureDate: req.body.manufactureDate,
            quantity: req.body.quantity,
            price: req.body.price,
            discount: req.body.discount,
            disPrice: (parseInt(req.body.price) * (100 - parseInt(req.body.discount))) / 100
        };

        // If a new image is provided, add the imageUrl field to the update object
        if (req.file) {
            updateObj.imageUrl = req.file.filename;
        }
        // Find and update the product by ID
        const product = await Product.findByIdAndUpdate(id, updateObj);

        if (!product) {
            return res.status(400).send({ message: "Product cannot be found" });
        }

        return res.status(200).send({ message: "Product has been updated successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message });
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