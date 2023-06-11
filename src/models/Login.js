const db = require('./db');

//reproduzindo a tabela Login
const Login = db.sequelize.define('Login', {
    IDlogin: {
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
    //freezeTableName: true define
    //o nome da tabela sem o S
}, { freezeTableName: true });

//Login.sync({ force: true });
module.exports = Login;