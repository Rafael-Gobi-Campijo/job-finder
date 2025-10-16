const Sequelize = require('sequelize') // Chamar o sequelize.

// Instância do sequelize.
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db/app.db'
})

// Exportas "coisas" que estão fora do node.js,
module.exports = sequelize