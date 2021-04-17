//import { useAuth0 } from '@auth0/auth0-react';

const express = require('express')
const userRouter = express.Router()
//const { user } = useAuth0();

const ProgramCtrl = require('../controllers/program-ctrl')
const userModel = require('../models/user-model.js');
const userModelTemp = require('../models/user-model-temp.js');


    // const defaultdata = {
    //     username: 'null',
    //     email: 'null',
    //     country: 'null',
    //     insta: 'null',
    //     contact: 'null'

    // };

    // const newUser = new userModel(defaultdata); //instance of model
    //     newUser.save((error)=>{
    //         if(error){
    //             console.log('Error in saving user');
    //         } else {
    //             console.log('Data saved!')
    //         }
    //     });

// userRouter.post('/users/:email' , (req, res, next) => {
//     user.create(req.body, (error, data) => {
//         if (error) {
//             return next(error)
//         } else {
//             console.log(data)
//             res.json(data)
//         }
//     })
// });


userRouter.get('/users/:email', (req, res) => {
    

    userModel.find({email: req.params.email })
    .then((data) => {
        res.json(data)

    })
    .catch( (error) => {
        console.log('error');

    })

});

userRouter.put('/edit/:email', (req, res) => {
    
    userModel.updateOne({email: req.params.email}, {$set: { username: req.body.username, country: req.body.country, insta: req.body.insta, contact: req.body.contact}}, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});




module.exports = userRouter