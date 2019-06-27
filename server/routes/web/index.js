

const express = require('express')

const router = express.Router()
const Note = require('../../models/Note')

const validateNoteInput = require('../../validation/note')

// @route GET /
// @description Home
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
// @description Home
// @access Public
router.get('/create-note', (request, response) => {
    response
        .render('create_note', {
            title: 'Create Note'
        })   
})

router.post('/create-note', (request, response) => {

    const { errors, isValid } = validateNoteInput(request.body)
    
    if(!isValid) {
        response
            .render('create_note', {
                title: 'Create Note',
                titleError: errors.title
            })
    }

    console.log(errors)
})

module.exports = router;