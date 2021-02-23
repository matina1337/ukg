
const express = require('express')

const ProgramCtrl = require('../controllers/program-ctrl')

const router = express.Router()

router.post('/program', ProgramCtrl.createProgram)
router.put('/program/:id', ProgramCtrl.updateProgram)
router.delete('/program/:id', ProgramCtrl.deleteProgram)
router.get('/program/:id', ProgramCtrl.getProgramById)
router.get('/programs', ProgramCtrl.getPrograms)

module.exports = router