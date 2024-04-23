import express from "express";
import mongoose from "mongoose";
import productRoutes from "./routes/productRoutes.js";
import OrderRoutes from "./routes/OrderRoutes.js"
import SalaryRoutes from "./routes/salaryRoutes.js"
import cors from "cors";
import 'dotenv/config';
const PORT = process.env.PORT || 3500;
const app = express();

app.use(express.json());
app.use(express.static('public'))

const corsOptions = {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));

app.use('/products',productRoutes)
app.use('/orders',OrderRoutes)
app.use('/salary',SalaryRoutes);

const mongoBDnUrl = process.env.MONGODB_URL;

mongoose.connect(mongoBDnUrl, {})
    .then(() => {
        console.log("App connected to the database")

        app.listen(PORT, () => {
            console.log(`App is listening to port : ${PORT}`)
        })
    })
    .catch(err => console.error(err));

/*
mongoose
    .connect(mongoDBUrl)
    .then(() => {
        console.log("App connected to the database")

        app.listen(PORT, () => {
            console.log(`App is listening to port : ${PORT}`)
        })
    })
    .catch((error) => {
        console.log(error)
    })

    {
            "userId":"it223",
            "products":["660bc0e370c6e4b0df86fdbd"],
            "totalPrice" : 0,
            "orderStatus" : "pending"
}
*/
