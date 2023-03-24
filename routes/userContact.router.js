const express = require('express')
const router = express.Router()

const userContact = require('../controller/contact.controller')

router.post('/add', userContact.addCOntact)
router.get('/get/:userId', userContact.getAllContact)
router.post('/edit', userContact.editContact)
router.delete('/delete/:contactId', userContact.deleteContact)

module.exports = router
