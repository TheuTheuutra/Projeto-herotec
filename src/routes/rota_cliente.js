const express = require('express');
const router = express.Router();
//vamos carregar nosso modelo 
const Login = require("../models/Login");
const Endereco = require("../models/Endereco");
const Cliente = require("../models/Cliente");

router.post('/add_cliente', async (req, res) => {
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
        nome_completo: req.body.nome_completo,
        CPF: req.body.cpf,
        data_nasc: req.body.data_nasc,
        IDLogin: login.IDlogin,
        IDEndereco: endereco.IDEndereco
      });
  
      res.redirect("index");
    } catch (error) {
      res.send('Houve um erro: ' + error);
    }
  });