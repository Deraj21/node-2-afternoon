const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
require('dotenv').config();
const pc = require('./products_controller');

const app = express();
app.use( bodyParser.json() );
app.use( cors() );

// connect to database
massive( process.env.CONNECTION_STRING ).then( db => {
  app.set('db', db);
  console.log('Connected to the database');
}).catch( err => {
  console.log( err );
});

// endpoints here
app.post('/api/product', pc.create); // create
app.get('/api/products', pc.getAll); // getAll
app.get('/api/product/:id', pc.getOne); // getOne
app.put('/api/product/:id', pc.update); // update
app.delete('/api/product/:id', pc.delete); // delete


const port = 3000;
app.listen(port, () => { console.log(`server listening on port ${port}`); } );
