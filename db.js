const mongoose = require('mongoose')
require('dotenv').config()

const { DB_STRING } = process.env

exports.createConnection = () => {
    mongoose.connect(`mongodb+srv://dipvadukiya06:S5lxmxRcgxX7pncH@cluster0.6bj6yrx.mongodb.net/Crypto`, (error) => {
        if (error) {
            console.log('error while connecting with database')
        }
        else {
            console.log('connected with database')
        }
    })
}
