const mongoose = require('mongoose')
require('dotenv').config()

exports.dbConnection = async () => {
    mongoose.connect("mongodb+srv://dipvadukiya06:S5lxmxRcgxX7pncH@cluster0.6bj6yrx.mongodb.net/Crypto", (error) => {
        if (!error) {
            console.log('Connected with MongoDB...')
        }
        else {
            console.log('error while connecting...', error)
        }
    })
}
