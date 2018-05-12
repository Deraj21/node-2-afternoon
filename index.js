const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
require('dotenv').config();
// const controller = require('./controller');

const app = express();
app.use( bodyParser.json() );
app.use( cors() );

// endpoints here


const port = 4000;
app.listen(port, () => console.log(`server listening on port ${port}`) );