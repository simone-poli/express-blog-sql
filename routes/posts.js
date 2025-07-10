const express = require("express")
const router = express.Router()
const postsControllers = require("../controllers/postsControllers")





//index
router.get('/', postsControllers.index)

//show
router.get('/:id', postsControllers.show)

//store
router.post('/', postsControllers.store)

//update
router.put('/:id', postsControllers.update)

//modify
router.patch('/:id', postsControllers.modify)

//delete
router.delete('/:id', postsControllers.destroy)



module.exports = router