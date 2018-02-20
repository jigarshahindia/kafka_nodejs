var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;


  authMiddleware = require('./middlewares/requestAuth')
  bodyParser = require('body-parser')
  morgan = require('morgan');
  
// mongoose instance connection url connection

app.use(morgan('combined'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(authMiddleware.auth)

var routes = require('./routes/routes'); //importing route
routes(app); //register the route


app.listen(port);

console.log('Kafka RESTful API server started on: ' + port);