const db = require('./db');

//reproduzindo a tabela tipo_pagamento
const TipoPagamento = db.sequelize.define('Tipo_pagamento', {
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

//TipoPagamento.sync({force:true});
module.exports = TipoPagamento;