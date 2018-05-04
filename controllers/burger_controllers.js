const burger = require('../models/burger.js')

const router = (app) => {

    app.get('/', function(req, res){
      burger('/')
      .then((home) => {
        let not_eaten = home.filter(burger => burger.devoured === 0)
        let eaten = home.filter(burger => burger.devoured === 1)
        res.render('index', {not_eaten, eaten});
      })
      
    });

    app.post('/order_burger', function(req, res){
      const data = req.body.data
      const order = burger('/order_burger', data)
      res.send({redirect: 'https://hidden-river-13796.herokuapp.com/'});
    });

    app.put('/update_burger', function(req, res){
        let data = req.body.data
        burger('/update_burger', data)
        res.send({redirect: 'https://hidden-river-13796.herokuapp.com/'});
    });

}

module.exports = router