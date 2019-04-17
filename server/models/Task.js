const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Criando um model com o nome de TASK para ser criado no banco

let Task  = new Schema(
    {
        title:{
            type: String,
            required: true,
        },
        completed: {
            type: Boolean,
            default: false,
        },
        details: {
            type: String,
        },
        creation_date: {
            type: Date,
            default: Date.now()
        },
        conclusion_date: {
            type: Date,
        },
        remember_me_date: {
            type: Date,
        },
    }
);

module.exports = mongoose.model('Task', Task);