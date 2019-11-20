// Lógica das rotas - lida com as operações do model
const mongoose = require('mongoose');

const Product = mongoose.model('Product')

module.exports = {
    async index(req,res) { // Lista todos os registros dos produtos
        const products = await Product.find();

        return res.json(products)
    },

    async store(req,res) { // Criando registros
        const product = await Product.create(req.body) // Métodos baseado no
        
        //return res.json(product)
        
        // Enviando apenas os dados abaixo
        const {title, description, url} = product
        return res.json({title,description,url})
    }
    
};