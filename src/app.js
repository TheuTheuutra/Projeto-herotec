const express = require("express");
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();
const rota_aluno = require('./routes/rota_aluno.js');
const rota_turma = require('./routes/rota_turma.js');
const admin = require('./routes/admin.js');
//const Post = require('./models/Post');
//carregando o cabeçalho do html em outras páginas
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
//arquivos estáticos
app.use('/public/css', express.static('public/bootstrap/css'));
app.use('/public/js', express.static('public/bootstrap/js'));
app.use('/public/img', express.static('public/img'));

//Remanejando Rotas admin
app.use('/', admin);

//Remanejando Rotas de aluno
// app.use('/rota_aluno', rota_aluno);
// //Remanejando Rotas de turma
// app.use('/rota_turma', rota_turma);
const PORT = 8081;
app.listen(PORT,()=>{
 console.log("Servidor Rodando");
});