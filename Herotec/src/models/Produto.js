const db = require('./db');
//reproduzindo a tabela Aluno
const Produto = db.sequelize.define('Produto', {
    IDProduto: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Tipo: {
        type: db.Sequelize.STRING
    },
    Marca: {
        type: db.Sequelize.STRING
    },
    Nome: {
        type: db.Sequelize.STRING
    },
    Preco: {
        type: db.Sequelize.STRING
    },
    QTD: {
        type: db.Sequelize.STRING
    },
    Cor: {
        type: db.Sequelize.STRING
    },
    Descricao: {
        type: db.Sequelize.STRING
    }
    
    //freezeTableName: true define
    //o nome da tabela sem o S
}, { freezeTableName: true });

Produto.sync({force:true});
//module.exports = Produto;