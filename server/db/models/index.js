const User = require('./user')
const Board = require('./board')
const List = require('./list')
const Card = require('./card')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
User.hasMany(Board)
Board.belongsTo(User)
Board.hasMany(List)
List.belongsTo(Board)
List.hasMany(Card)
Card.belongsTo(List)


module.exports = {
  User,
  Board,
  List,
  Card
}