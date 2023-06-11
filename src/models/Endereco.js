const db = require('./db');
//reproduzindo a tabela Aluno
const Endereco = db.sequelize.define('Endereco', {
    IDEndereco: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    UF: {
        type: db.Sequelize.STRING
    },
    Cidade: {
        type: db.Sequelize.STRING
    },
    Rua: {
        type: db.Sequelize.STRING
    },
    Numero: {
        type: db.Sequelize.STRING
    },
    Complemento: {
        type: db.Sequelize.STRING
    },
    Referencia: {
        type: db.Sequelize.STRING
    },
    
    //freezeTableName: true define
    //o nome da tabela sem o S
}, { freezeTableName: true });

//Endereco.sync({force:true});
module.exports = Endereco;