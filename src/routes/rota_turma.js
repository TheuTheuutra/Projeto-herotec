// const express = require('express');
// const router = express.Router();
// //vamos carregar nosso modelo
// const Turma = require("../models/Turma");
// //_____________ Rotas da Turma __________________
// //Carregando todas as Turmas
// router.get('/turma', (req, res) => {
//     Turma.findAll().then((turmas) => {
//         turmas = turmas.map((turma) => {
//             return turma.toJSON();
//         });
//         res.render("admin/turma/turma", { turmas: turmas });
//     });
// });
// //Deletando a turma
// router.get('/deletar_turma/:id', (req, res) => {
//     Turma.destroy({ where: { 'id_turma': req.params.id } }).then(() => {
//         res.redirect("/rota_turma/turma");
//     }).catch((err) => {
//         res.render("Esse turma não existe");
//     });
// });
// //abre e preenche o form de edição de turma
// router.get('/editar_turma/:id', (req, res) => {
//     Turma.findAll({ where: { 'id_turma': req.params.id } }).then((turmas) => {
//         turmas = turmas.map((turma) => { return turma.toJSON() });
//         res.render("admin/turma/editturma", { turmas: turmas });
//     });
// });
// //Edita os dados da turma
// router.post('/turma/editar_turma', (req, res) => {
//     Turma.update({
//         descricao: req.body.descricao
//     },
//         {
//             where: { id_turma: req.body.id_turma }
//         }).then(() => {
//             res.redirect("/rota_turma/turma");
//         }).catch((erro) => {
//             res.send("Esta turma não existe " + erro);
//         });
// });
// //rota do form para add turma
// router.get('/turma/add', (req, res) => {
//     res.render("admin/turma/addturma");
// });
// //rota do botão do form para criar a turma
// router.post('/turma/nova', (req, res) => {
//     Turma.create({
//         descricao: req.body.descricao
//     }).then(() => {
//         res.redirect("/rota_turma/turma");
//     }).catch((erro) => {
//         res.send('Houve um erro: ' + erro);
//     });
// });
// //______ Fim das rotas da turma ___________
// module.exports = router;