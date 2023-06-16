const express = require('express');
const router = express.Router();
//vamos carregar nosso modelo 
const Produto = require("../models/Produto");


router.get('/produto', (req, res) => {
    Produto.sequelize.query("select * from Produto",
        { model: Produto }).then(function (produtos) {
            var nprodutos= JSON.parse(JSON.stringify(produtos));
            res.render("admin/produto/listproduto",
                { produtos: nprodutos });
        });
});
router.get('/produto/add', (req, res) => {
        res.render("admin/produto/addproduto");
});
router.post('/produto/nova', (req, res) => {
    Produto.create({
        Tipo: req.body.Tipo,
        Marca: req.body.Marca,
        Nome: req.body.Nome,
        Preco: req.body.Preco,
        QTD: req.body.QTD,
        Cor: req.body.Cor,
        Descricao: req.body.Descricao
    }).then(() => {
        res.redirect("/rota_produto/produto");
    }).catch((erro) => {
        res.send('Houve um erro: ' + erro);
    });
});


module.exports = router