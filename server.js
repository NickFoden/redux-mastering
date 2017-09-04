const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

mongoose.connect('mongodb://localhost:27017/todo-app-redux')

app.listen(8080, () => console.log('A ok!'))