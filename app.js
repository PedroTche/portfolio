const express = require('express')
const app = express()
const port = 8080

app.use(express.static('public'))
app.use('/img',express.static(__dirname + 'public/img'))
app.use('/style.css',express.static(__dirname + 'public/style.css'))
app.use('/script.js',express.static(__dirname + 'public/script.js'))

app.set('views','./views')
app.set('view engine','ejs')

app.get('',(req,res)=>{
    res.render('index')
})

app.get('*', function(req, res) {
    res.redirect('/');
});

app.listen(port, () => console.info(`Listening on port ${port}`))