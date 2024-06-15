const express = require('express')
const mongoose = require('mongoose')
const cors = require( "cors");
require('dotenv/config');
const PORT = process.env.PORT || 5555;
const StockRoute = require('./routes/StockRoute')

const mongoDnUrl = process.env.MONGODB_URL;

const app = express()
app.use(cors())
app.use(express.json())

app.use('/stocks',StockRoute);


mongoose.connect(mongoDnUrl, {})
    .then(() => {
        console.log("App connected to the database")

        app.listen(PORT, () => {
            console.log(`App is listening to port : ${PORT}`)
        })
    })
    .catch(err => console.error(err));

    app.delete('/deleteUser/:id', (req,res) => {
        const id = req.params.id;
        ServiceModel.findByIdAndDelete({_id:id})
        .then(res => res.json(res))
        .catch(err => res.json(err))
    })