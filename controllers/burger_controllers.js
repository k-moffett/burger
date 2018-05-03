const burger = require('../models/burger.js')

const router = (app, fs) => {

    app.get('/', function(req, res){
      const home = burger('/')
      res.render('index', {home});
    });

    app.post('/order_burger', function(req, res){
      const data = req.body.data
      const order = burger('/order_burger', data)
      res.send({redirect: 'http://localhost:8080/'});
    });

    app.put('/update_burger', function(req, res){
        burger('/update_burger')
    });

}

module.exports = router