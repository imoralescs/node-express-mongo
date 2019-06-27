const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()
const port = process.env.PORT || 8000

mongoose
    .connect('mongodb://admin:123456abc@ds145911.mlab.com:45911/node_notes')
    .then(() => console.log('MongoDB connected'))
    .catch(error => console.log(error))

//-- Routes
const index = require('./routes/web/index')
const notes = require('./routes/api/notes')

//-- Middleware
// Body parser middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//-- View
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
app.use(express.static(path.join(__dirname, 'public')))

// Set routes
app.use('/api/notes', notes)
app.use('/', index)

// 404 route
app.all('*', (request, response) => {
    response
        .status(200)
        .send('Hi, Developers')
})

app.listen(port, () => {
    console.log(`Server stated at http://localhost:${port}`)
})