const express = require('express');
const app = express();
const port = 3000;
const multer = require('multer');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.listen(port);

