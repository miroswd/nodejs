// Lógica das rotas - lida com as operações do model
const mongoose = require('mongoose');

const Product = mongoose.model('Product')

module.exports = {
    async index(req,res) { // Lista todos os registros dos produtos
        const products = await Product.find();

        return res.json(products)
    }
    
};