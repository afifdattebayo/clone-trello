const { create, getOne, update, destroy, move } = require("./controller")
const { validateCreate, validateOne, validateUpdate, validateMove } = require("./validator")
const router = require("express").Router()

router.post('/items', validateCreate, create)
router.get('/items/:id', validateOne, getOne)
router.put('/items/:id', validateUpdate, update)
router.delete('/items/:id', validateOne, destroy)
router.put('/items/:id/move', validateMove, move)


module.exports = router