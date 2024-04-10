const express =require('express')
const router = express.Router()
const { ensureAuth } = require('../middleware/auth')

const Story = require('../models/Story')

// @desc  Show add page
// @router GET / 
router.get('/add', ensureAuth, (req, res) => {
    res.render('stories/add')
})

// @desc  Process add form
// @router POST /stories
router.post('/', ensureAuth, async (req, res) => {
    try {
        req.body.user = req.user.id
        await Story.create(req.body)
        res.redirect('/dashboard')
    } catch (err) {
        console.error(err)
        res.render('error/500')
    }

    res.render('stories/add')
})


module.exports = router