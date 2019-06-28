

const express = require('express')

const router = express.Router()
const Note = require('../../models/Note')

const validateNoteInput = require('../../validation/note')

// @route GET /
// @description Home Page
// @access Public
router.get('/', (request, response) => {
    Note
        .find({})
        .then(notes => {
            response
                .render('index', {
                    title: 'Home',
                    notes: notes
                })
        })
        .catch(error => error)    
})

// @route GET /
// @description Create Note Form
// @access Public
router.get('/create-note', (request, response) => {
    response
        .render('create_note', {
            title: 'Create Note'
        })   
})

// @route GET /
// @description Create Note Submit
// @access Public
router.post('/create-note', (request, response) => {
    const { errors, isValid } = validateNoteInput(request.body)
    
    if(!isValid) {
        response
            .render('create_note', {
                title: 'Create Note',
                titleError: errors.title
            })
    }

    const newNote = new Note({
        title: request.body.title,
        description: request.body.description
    })

    newNote
        .save()
    
    response.redirect('/')
})

module.exports = router;