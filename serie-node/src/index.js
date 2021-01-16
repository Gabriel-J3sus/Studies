const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json()); //know when I'm sending data in json type
app.use(bodyParser.urlencoded({ extended: false })); //know when Im ending parameters by url

require('./controllers/authController')(app)
require('./controllers/projectController')(app)

app.listen(3333);
