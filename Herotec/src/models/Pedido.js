const db = require('./db');
//reproduzindo a tabela Aluno
const Pedido = db.sequelize.define('Pedido', {
    IDPedido: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    IDProduto: {
        type: db.Sequelize.INTEGER,
        references: { model: 'Produto', key: 'IDProduto' },
        onDelete: 'CASCADE',
        allowNull: false,
    },
    IDCliente: {
        type: db.Sequelize.INTEGER,
        references: { model: 'Cliente', key: 'IDCliente' },
        onDelete: 'CASCADE',
        allowNull: false,
    },
    IDTipo_pagamento: {
        type: db.Sequelize.INTEGER,
        references: { model: 'Tipo_pagamento', key: 'IDTipo_pagamento' },
        onDelete: 'CASCADE',
        allowNull: false,
    }
    //freezeTableName: true define
    //o nome da tabela sem o S
}, { freezeTableName: true });

Pedido.sync({force:true});

//module.exports = Pedido;