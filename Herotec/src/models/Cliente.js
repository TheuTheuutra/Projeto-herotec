const db = require('./db');
//reproduzindo a tabela Aluno
const Cliente = db.sequelize.define('Cliente', {
    IDCliente: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    tipo_de_conta: {
        type: db.Sequelize.STRING
    },
    Perfil: {
        type: db.Sequelize.STRING
    },
    Nome_completo: {
        type: db.Sequelize.STRING
    },
    CPF: {
        type: db.Sequelize.STRING
    },
    data_nasc: {
        type: db.Sequelize.STRING
    },
    Tel_cel: {
        type: db.Sequelize.STRING
    },
    IDLogin: {
        type: db.Sequelize.INTEGER,
        references: { model: 'Login', key: 'IDLogin' },
        onDelete: 'CASCADE',
        allowNull: false,
    },
    IDEndereco: {
        type: db.Sequelize.INTEGER,
        references: { model: 'Endereco', key: 'IDEndereco' },
        onDelete: 'CASCADE',
        allowNull: false,
    }
    //freezeTableName: true define
    //o nome da tabela sem o S
}, { freezeTableName: true });

Cliente.sync({force:true});
//module.exports = Cliente;