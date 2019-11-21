// Lógica das rotas - lida com as operações do model
const mongoose = require('mongoose');

const Product = mongoose.model('Product')

module.exports = {
    async index(req,res) { // Lista todos os registros dos produtos

        const {page} = req.query; // ?page=1

        const products = await Product.paginate({},{page, limit:10});
                                    // no primeiro parâmetro é passado o where, uma condição
                                    // segundo parâmetro, página atual (posso passar um valor padrão) e o limite por página

        return res.json(products)
    },

    async show(req,res){  // Rota de detalhe, exibe um único produto
        const product = await Product.findById(req.params.id);
        return res.json(product)
    },

    async store(req,res) { // Criando registros
        const product = await Product.create(req.body) // Métodos baseado no
        
        //return res.json(product)
        
        // Enviando apenas os dados abaixo
        const {title, description, url} = product
        return res.json({title,description,url})
    },

    async update(req,res){ // Atualização de informações

        // Busca pelo o id e atualiza com os dados passados pelo body

        // {new: true} => Retorna o product atualizado para dentro da variável

        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new:true});
        return res.json(product)
    },

    async destroy(req,res){ // Deleta informações
        
        await Product.findByIdAndRemove(req.params.id)
        
        return res.json({msg:"O produto foi deletado"})

        // return res.send();// -> retorna um status 200

    }
    
};
