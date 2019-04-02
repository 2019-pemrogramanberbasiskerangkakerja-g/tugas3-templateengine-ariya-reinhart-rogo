const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('pages/index', {title: "Yeet-Site"})
})

app.get('/about', (req, res) => {
    res.render('pages/about', {title: "Yeet-Site | About"})
})

app.listen(3000, () => {
    console.log("App started")
})