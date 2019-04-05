const Sequelize = require('sequelize')
const db = require('../db')

const List = db.define('list', {
  title: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
//   cards: {
//     type: Sequelize.ARRAY(Sequelize.STRING)   // listId in Cards
//   }
})

module.exports = List