const Sequelize = require('sequelize')
const db = require('../db')

const Board = db.define('board', {
  title: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING
  },
  lists: {
    type: Sequelize.ARRAY(Sequelize.STRING)
  }
})

module.exports = Board