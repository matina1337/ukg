//import { useAuth0 } from '@auth0/auth0-react';

const express = require('express')
const moveRouter = express.Router()

const ProgramCtrl = require('../controllers/program-ctrl')
const moveModel = require('../models/user-model.js');


moveRouter.get('/moves/:program_id', (req, res) => {
    

    moveModel.find({program_id: req.params.program_id})
    .then((data) => {
        res.json(data)

    })
    .catch( (error) => {
        console.log('error');

    })

});

// moveRouter.post('/add/:program_id', (req, res) => {
    
//     moveModel.create({program_id: req.params.program_id}, {$set: { name: req.body.name, type: req.body.type, jump: req.body.jump, rev: req.body.rev, min: req.body.min, sec: req.body.sec}}, (error, data) => {
//         if (error) {
//             return next(error)
//         } else {
//             res.json(data)
//         }
//     })
// });

moveRouter.put('/editjump/:program_id', (req, res) => {
    
    moveModel.updateOne({program_id: req.params.program_id}, {$set: { name: req.body.name, type: req.body.type, jump: req.body.jump, rev: req.body.rev, min: req.body.min, sec: req.body.sec}}, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});




module.exports = moveRouter