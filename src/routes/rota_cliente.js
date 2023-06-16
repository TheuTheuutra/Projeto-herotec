const express = require('express');
const router = express.Router();
//vamos carregar nosso modelo 
const Login = require("../models/Login");
const Endereco = require("../models/Endereco");
const Cliente = require("../models/Cliente");

router.get('/cliente', (req, res) => {
  res.render("admin/cliente/addcliente");
});

router.post('/add', async (req, res) => {
    try {
      const login = await Login.create({
        email: req.body.email,
        senha: req.body.senha
      });
  
      const endereco = await Endereco.create({
        UF: req.body.uf,
        Cidade: req.body.Cidade,
        Rua: req.body.Rua,
        Numero: req.body.Numero,
        Complemento: req.body.Complemento,
        Referencia: req.body.Referencia
      });
  
      await Cliente.create({
        Perfil: req.body.Perfil,
        Nome_completo: req.body.Nome_completo,
        CPF: req.body.cpf,
        data_nasc: req.body.data_nasc,
        IDLogin: login.IDlogin,
        IDEndereco: endereco.IDEndereco
      });
  
      res.redirect("/");
    } catch (error) {
      res.send('Houve um erro: ' + error);
    }
  });

  module.exports = router ;