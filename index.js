const express = require('express')
const port = 8000
var bodyParser = require('body-parser')
var cookies = require("cookie-parser");
//var flash = require('connect-flash');

const app = express()


const usersRoutes = require('./routes/users.js');
const picturesRoutes = require('./routes/pictures.js');
const commentsRoutes = require('./routes/comments.js');
const likesRoutes = require('./routes/likes.js');

const hbs = require('express-handlebars');


var path = require('path');

var dateHelper = require('handlebars-dateformat')

const mongoose = require('./db/mongoose');
const authenticate = require('./middleware/authenticate.js');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

app.use(cookies())
//app.use(flash())

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('*', authenticate);
app.use('/users', usersRoutes);
app.use('/pictures', picturesRoutes);
app.use('/comments', commentsRoutes);
app.use('/likes', likesRoutes);

app.engine('hbs', hbs.engine({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/layouts/',
runtimeOptions: {
    allowedProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true
}, helpers:{
    'dateFormat': dateHelper
}
}));

app.set('view engine', 'hbs');

app.listen(port);