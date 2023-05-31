const db = require('./db');
//reproduzindo a tabela Aluno
const Login = db.sequelize.define('login', {
id_login: {
type: db.Sequelize.INTEGER,
autoIncrement: true,
allowNull: false,
primaryKey: true
},
email: {
type: db.Sequelize.STRING
},
senha: {
type: db.Sequelize.STRING
},
cpf: {
type: db.Sequelize.STRING
},
fk_cliente: {
type: db.Sequelize.INTEGER,
references: { model: 'cliente', key: 'id_cliente' },
onDelete: 'CASCADE',
allowNull: false,
}
//freezeTableName: true define
//o nome da tabela sem o S
}, { freezeTableName: true });
module.exports = Cliente;