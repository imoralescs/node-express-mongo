const mongoose = require('mongoose')
const Schema = mongoose.Schema

const NoteSchema = new Schema({
    title: {
        type: String
    },
    description: {
        type: String
    }
})

const Note = mongoose.model('Note', NoteSchema)

module.exports = Note 