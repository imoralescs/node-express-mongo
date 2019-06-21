

const express = require('express')

const router = express.Router()

// @route GET /
// @description Home
// @access Public
router.get('/', (request, response) => {
    response
        .render('index', {
            title: 'Home'
        })
})

module.exports = router;