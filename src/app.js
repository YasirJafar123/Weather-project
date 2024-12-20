const { error } = require('console');
const express = require('express')
const app = express();
const hbs = require('hbs');
const path = require('path');
const port = process.env.PORT || 9000;

// staic path 
const staticpath = path.join(__dirname,'../public');
const template_path = path.join(__dirname,'../template/views');
const paretials_path = path.join(__dirname,'../template/partials');

app.set('view engine','hbs');
app.set('views', template_path)
hbs.registerPartials(paretials_path);


app.use(express.static(staticpath));

// routing 
app.get('/',(req, res) =>{
    res.render('index')
})

app.get('/weather',(req, res) =>{
    res.render('weather')
})

app.get('/about',(req, res) =>{
    res.render('about')
})
app.get('*',(req, res) =>{
    res.render('404error', {
        errorMsg:'Opps! Page Not Found'
        })
})

app.listen(port, () =>{
    console.log(`i am live port no.${port}`)
})