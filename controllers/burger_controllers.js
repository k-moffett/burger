const burger = require('../models/burger.js')

const router = (app) => {

    app.get('/', function(req, res){
      burger('/').then((home) => {
        let eaten = home.filter(burger => burger.devoured === 1)
        home.map((item, index) => {if (item.devoured === 1){home.splice(index, 1)}
        })
        console.log(home)
      res.render('index', {home, eaten});
      })
      
    });

    app.post('/order_burger', function(req, res){
      const data = req.body.data
      const order = burger('/order_burger', data)
      res.send({redirect: 'http://localhost:8080/'});
    });

    app.put('/update_burger', function(req, res){
        let data = req.body.data
        burger('/update_burger', data)
    });

}

module.exports = router