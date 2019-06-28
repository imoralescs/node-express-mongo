const express = require('express')
const router = express.Router()
const Note = require('../../models/Note')

router.get('/', (request, response) => {
    Note
        .find({})
        .then(docs => response.json(docs))
        .catch(error => error)
})

router.get('/:id', (request, response) => {
    Note
        .find({ _id: request.params.id})
        .then(docs => response.json(docs))
        .catch(error => error)
})

module.exports = router;