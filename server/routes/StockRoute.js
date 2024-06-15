/*const express = require('express');
const Stock = require('../Models/StockModel');

const router = express.Router();

//Create new stock
router.post('/add', async (request, response) => {
    try {
        if (
            !request.body.productID ||
            !request.body.productName ||
            !request.body.quantity
        ) {
            return response.status(400).send({
                message: 'Send all required fields: productID, productName, quantity',
            });
        }
        const newStock = {
            productID: request.body.productID,
            productName: request.body.productName,
            quantity: request.body.quantity,
        };

        const stock = await Stock.create(newStock);

        return response.status(201).send(stock);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route for Get All Stocks from database
router.get('/all', async (request, response) => {
    try {
        const stock = await Stock.find({});

        return response.status(200).json({
            count: stock.length,
            data: stock,
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route for Get One Stock from database by id
router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const stock = await Stock.findById(id);

        return response.status(200).json(stock);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route for Update a Book
router.put('/edit/:id', async (request, response) => {
    try {
        if (
            !request.body.productID ||
            !request.body.productName ||
            !request.body.quantity
        ) {
            return response.status(400).send({
                message: 'Send all required fields: productID, productName, quantity',
            });
        }

        const { id } = request.params;

        const result = await Stock.findByIdAndUpdate(id, request.body);

        if (!result) {
            return response.status(404).json({ message: 'Stock not found' });
        }

        return response.status(200).send({ message: 'Stock updated successfully' });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route for Delete a book
router.delete('/delete/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const result = await Stock.findByIdAndDelete(id);

        if (!result) {
            return response.status(404).json({ message: 'Stock not found' });
        }

        return response.status(200).send({ message: 'Stock deleted successfully' });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});
module.exports = router;
*/

const express = require('express');
const Stock = require('../Models/StockModel');

const router = express.Router();

// Create new stock
router.post('/add', async (request, response) => {
    try {
        if (
            !request.body.productID ||
            !request.body.productName ||
            !request.body.quantity ||
            !request.body.expireDate // Ensure expiry date is provided
        ) {
            return response.status(400).send({
                message: 'Send all required fields: productID, productName, quantity, expireDate',
            });
        }

        const newStock = {
            productID: request.body.productID,
            productName: request.body.productName,
            quantity: request.body.quantity,
            expireDate: request.body.expireDate // Include expiry date in new stock object
        };

        const stock = await Stock.create(newStock);

        return response.status(201).send(stock);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route for updating a stock item
router.put('/edit/:id', async (request, response) => {
    try {
        if (
            !request.body.productID ||
            !request.body.productName ||
            !request.body.quantity ||
            !request.body.expireDate // Ensure expiry date is provided
        ) {
            return response.status(400).send({
                message: 'Send all required fields: productID, productName, quantity, expireDate',
            });
        }

        const { id } = request.params;

        const result = await Stock.findByIdAndUpdate(id, request.body);

        if (!result) {
            return response.status(404).json({ message: 'Stock not found' });
        }

        return response.status(200).send({ message: 'Stock updated successfully' });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route for Get All Stocks from database
router.get('/all', async (request, response) => {
    try {
        const stock = await Stock.find({});

        return response.status(200).json({
            count: stock.length,
            data: stock,
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route for Get One Stock from database by id
router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const stock = await Stock.findById(id);

        return response.status(200).json(stock);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

// Route for Delete a stock item
router.delete('/delete/:id', async (request, response) => {
    try {
        const { id } = request.params;

        const result = await Stock.findByIdAndDelete(id);

        if (!result) {
            return response.status(404).json({ message: 'Stock not found' });
        }

        return response.status(200).send({ message: 'Stock deleted successfully' });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
});

module.exports = router;
