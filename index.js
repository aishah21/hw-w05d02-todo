var express = require('express');
var app = express();
var port = 3000;


var mustache = require('mustache-express');
app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');


var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


var logger = require('morgan');
app.use(logger('dev'));

app.use('/static', express.static(__dirname + '/public'));

var methodOverride = require('method-override');
app.use(methodOverride('_method'));


var todoController = require('./controllers/todoController');
app.use('/todo',todoController);

app.get('/',function(req,res){
  res.render('./index');
})

app.listen(port, function(){
  console.log('---------------------------------------');
  console.log('Express listening on localhost:' + port);
  console.log('---------------------------------------');
})