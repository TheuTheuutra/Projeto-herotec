const db = require('./db');
//reproduzindo a tabela Aluno
const Tipo_pagamento = db.sequelize.define('Tipo_pagamento', {
    IDTipo_pagamento: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    Credito: {
        type: db.Sequelize.STRING,
        allowNull: true
    },
    Debito: {
        type: db.Sequelize.STRING,
        allowNull: true
    },
    Pix: {
        type: db.Sequelize.STRING,
        allowNull: true
    },
    Boleto: {
        type: db.Sequelize.STRING,
        allowNull: true
    },
    Paypal: {
        type: db.Sequelize.STRING,
        allowNull: true
    },
    Bitcoin: {
        type: db.Sequelize.STRING,
        allowNull: true
    }
    //freezeTableName: true define
    //o nome da tabela sem o S
}, { freezeTableName: true });

Tipo_pagamento.sync({force:true});

//module.exports = Cliente;