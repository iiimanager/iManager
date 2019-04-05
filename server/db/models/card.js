const Sequelize = require('sequelize')
const db = require('../db')

const Card = db.define('card', {
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  }
})

module.exports = Card