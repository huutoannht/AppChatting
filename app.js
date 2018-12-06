const express = require('express');
const app=express();
const PORT = process.env.PORT || 5000

//Set the template engine ejs
app.set('view engine','ejs');

//middlewares
app.use(express.static('public'))

//routes
app.get('/',(req,res)=>{
    res.send('Hello word');
})

server = app.listen(PORT)