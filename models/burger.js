const orm = require('../config/orm.js')
// * Inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.
const burger = (path, data) => {

  switch (path) {

  case "/":
    return orm.selectAll()
  break;

  case "/order_burger":
    orm.insertOne(data)
  break;

  case "/update_burger":
    orm.updateOne()
  break;

  default:
    return 'Not Found'
  }

}//end burger model

module.exports = burger