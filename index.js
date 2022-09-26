require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const morgan = require('morgan')

morgan.token('body', req => {
    return JSON.stringify(req.body)
})

const app = express() 

app.set('port', process.env.PORT || 3005)



app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

const apiRoute = require('./routes/api')
app.use('/api', apiRoute)

const homeRoute = require('./routes/home')
app.use('/', homeRoute)

//last route, 
app.use((request, response) => {
    response.status(404).send({error: 'unknown endpoint'})
})

connectz().catch(err => console.log('what error is this?', err))
app.listen(app.get('port'), () => {
    console.log(`listening on port ${app.get('port')}`)
})

async function connectz() {
    await mongoose.connect(process.env.DB_URL, {useNewUrlParser: true}, (error) => error ? console.log('Connection Error: ', error) : console.log(`Connected to ${process.env.DB_NAME} database`))
}