const express = require('express')
      app = express();
const bodyParser = require('body-parser');

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())


const cart = [];

app.get('/shop', (req, res)=>{
    res.json(cart);
})


app.post('/shop', (req, res)=>{
    let newItem = (req.body);
    cart.push(newItem);
    res.json(cart);
    console.log(cart);
})


app.listen(8080, ()=>{
    console.log('Linked on server 8080!');
})