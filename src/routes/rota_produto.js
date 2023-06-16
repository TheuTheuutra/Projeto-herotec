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



module.exports = router