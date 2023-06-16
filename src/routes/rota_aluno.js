
const router = express.Router();
//vamos carregar nosso modelo 
const Turma = require("../models/Turma");
const Aluno = require("../models/Aluno");
//_____________ Rotas dos Alunos __________________ 
//Carregando todos os Alunos 
router.get('/aluno', (req, res) => {
    Aluno.sequelize.query("select * from selecAluno",
        { model: Aluno }).then(function (alunos) {
            var nalunos = JSON.parse(JSON.stringify(alunos));
            res.render("admin/aluno/aluno",
                { alunos: nalunos });
        });
});// const express = require('express');
//Deletando o aluno 
router.get('/deletar_aluno/:id', (req, res) => {
    Aluno.destroy({ where: { 'id_aluno': req.params.id } }).then(() => {
        res.redirect("/rota_aluno/aluno");
    }).catch((err) => {
        res.render("Esse aluno não existe");
    });
});
//abre e preenche o form de edição do aluno
router.get('/editar_aluno/:id', (req, res) => {
    Aluno.findAll({ where: { 'id_aluno': req.params.id } }).then((alunos) => {
        Turma.findAll().then((turmas) => {
            var nturmas = JSON.parse(JSON.stringify(turmas));
            var nalunos = JSON.parse(JSON.stringify(alunos));
            res.render("admin/aluno/editaluno", {
                alunos: nalunos,
                turmas: nturmas
            });
        });
    });
});

//Edita os dados do Aluno
router.post('/aluno/editar_aluno', (req, res) => {
    Aluno.update({
        matricula: req.body.matricula,
        nome: req.body.nome,
        descricao: req.body.descricao
    },
        {
            where: { id_aluno: req.body.id_aluno }
        }).then(() => {
            res.redirect("/rota_aluno/aluno");
        }).catch((erro) => {
            res.send("Este aluno não existe " + erro);
        });
});
//rota do form para add aluno 
router.get('/aluno/add', (req, res) => {
    Turma.findAll().then((turmas) =>{
        var nturmas = JSON.parse(JSON.stringify(turmas));
        res.render("admin/aluno/addaluno", {turmas:nturmas});
    });
});
//rota do botão do form para criar o aluno
router.post('/aluno/nova', (req, res) => {
    Aluno.create({
        matricula: req.body.matricula,
        nome: req.body.nome,
        fk_turma: req.body.fk_turma
    }).then(() => {
        res.redirect("/rota_aluno/aluno");
    }).catch((erro) => {
        res.send('Houve um erro: ' + erro);
    });
});
//______ Fim das rotas do aluno ___________ 
module.exports = router