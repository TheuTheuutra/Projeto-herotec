const express = require('express');
const router = express.Router();
//vamos carregar todos os modelos
//const Aluno = require("../models/Aluno");
//const Turma = require("../models/Turma");

router.get('/', (req, res) => {
    res.render("index");
});
router.get('/addcliente', (req, res) => {
    res.render("admin/cliente/addcliente");
});

// router.get('/imagens', (req, res) => {
//  res.render("escolas");
// });
module.exports = router;