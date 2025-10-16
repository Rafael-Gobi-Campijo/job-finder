// É necessário usar o sequelize para transformar o código de JavaScript para uma abstração do banco de dados.
const Sequelize = require('sequelize') // Chamar o sequelize.
const db = require('../db/connection') // Chamar o banco de dados.

// Crição do MODEL com o método chamado "DEFINE".
const Job = db.define('job', {
    title: {
        type: Sequelize.STRING,
    },
    description: {
        type: Sequelize.STRING,
    },
    salary: {
        type: Sequelize.STRING,
    },
    company: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
    },
    new_job: {
        type: Sequelize.INTEGER,
    }
})

// Exportar para usar aonde precisar.
module.exports = Job