const express = require('express')
const colors = require('colors')
const db = require('./database/db')
const { errorHandler } = require('./middleware/ErrorMiddleWare')
const cors = require('cors');
const bodyparser = require('body-parser')

const app = express()

app.use(cors());

app.use(bodyparser.json())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/users', require('./routes/UserRouter'))
app.use('/api/appointments', require('./routes/AppointmentsRouter'))

app.use(errorHandler)

db.query("SELECT 1")
    .then(() => {
        console.log('db connection  succeeded.')
        app.listen(3000,
            () => console.log('server started at 3000'))
    })
    .catch(err => console.log('db connection failed. \n' + err))