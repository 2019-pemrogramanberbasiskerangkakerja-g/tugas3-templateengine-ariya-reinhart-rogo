const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('pages/index', { title: "Yeet-Site" })
})

app.get('/about', (req, res) => {
    let authorData = [
        {
            nama: "Ariya Wildan Devanto",
            nrp: "05111540000123"
        },
        {
            nama: "Reinhart Ceisar Butar Butar",
            nrp: "05111540000132"
        },
        {
            nama: "Rogo Jagad Alit",
            nrp: "05111540000168"
        },
    ]

    res.render('pages/about', {
        title: "Yeet-Site | About",
        authorData: authorData,
        authorCount: authorData.length
    })
})

app.listen(3000, () => {
    console.log("App started")
})