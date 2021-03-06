const express = require('express');
const app = express()

app.set('view engine', 'pug')

app.use('/static', express.static('public'))

app.get('/', (req, res) => {
	res.render('home')
})


app.get('/create', (req, res) => {
	res.render('create')
})

app.listen(8000, err => {
	if (err) throw err

	console.log('App is running')
})