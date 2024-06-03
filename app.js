const path=require('path')

const express=require('express')

const form=require('./routes/form')

const db=require('./database/database')

const app=express()

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({extended:true}))

app.use('/files', express.static('files'));
app.use('/public', express.static('public'))


app.use(form)

db.connect().then(function(){
    app.listen(3000)
})
