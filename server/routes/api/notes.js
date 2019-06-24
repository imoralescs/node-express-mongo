const express = require('express')
const router = express.Router()
const Note = require('../../models/Note')

router.get('/', (req, res) => {
    Note
        .find({})
        .then(docs => res.json(docs))
        .catch(error => error)
})

router.get('/:id', (req, res) => {
    Note
        .find({ _id: req.params.id})
        .then(docs => res.json(docs))
        .catch(error => error)
})

module.exports = router;