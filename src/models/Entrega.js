const db = require('./db');
//reproduzindo a tabela Aluno
const Entrega = db.sequelize.define('Entrega', {
    IDEntrega: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    IDPedido: {
        type: db.Sequelize.INTEGER,
        references: { model: 'Pedido', key: 'IDPedido' },
        onDelete: 'CASCADE',
        allowNull: false,
    }
    //freezeTableName: true define
    //o nome da tabela sem o S
}, { freezeTableName: true });

//Entrega.sync({force:true});
module.exports = Entrega;