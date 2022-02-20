require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models')
const PORT = process.env.PORT || 5000
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())



const start = async () => {
    try{
        await sequelize.authenticate() // подключаемся к базе данных
        await sequelize.sync()// сверяем состояние базы данных со схемой данных
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`)) // Код запуска сервера
    }catch(e){
        console.log(e)
    }
}

start() // Запускаем сервер