const db = require('../db/db')
const Observacao = db.sequelize.define('observacao', {
    nome: {
        type: db.Sequelize.STRING
    },
    observacao_coluna: {
        type: db.Sequelize.STRING
    },
    chave: {
        type: db.Sequelize.INTEGER
    }
})

//criar tabela
// Observacao.sync({force:true})

module.exports = Observacao