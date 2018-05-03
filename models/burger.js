const orm = require('../config/orm.js')

const burger = (path, data) => {

  switch (path) {

  case "/":
    return orm.selectAll()
  break;

  case "/order_burger":
    orm.insertOne(data)
  break;

  case "/update_burger":
    orm.updateOne(data)
  break;

  default:
    return 'Not Found'
  }

}

module.exports = burger