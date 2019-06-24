

const express = require('express')

const router = express.Router()
const Note = require('../../models/Note')

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

module.exports = router;