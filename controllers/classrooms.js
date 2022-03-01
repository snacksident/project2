const express = require('express')
const app = new express()
const router = express.Router()
const db = require('../models')
const bcrypt = require('bcrypt')
const cryptojs = require('crypto-js')
require('dotenv').config()

//middleware
app.use(express.urlencoded({extended: false})) //body parser to make req.body work

// GET /classrooms
router.get('/',(req,res)=>{
    //load up classrooms index
    //populate with all created classrooms for this user
    res.render('classrooms/index.ejs')
})

//POST /classrooms
router.post('/', async (req,res)=>{
    //grab form data
    const [newClassroom, created] = await db.classroom.findOrCreate({
        where: {class_name: req.body.classroom_name}
    })
    if(!created){
        console.log('classroom already exists')
    }else{
        res.redirect('/classrooms')
    }
   
    // send to db
    // redirect to classrooms index
    // res.redirect('classrooms/index.ejs')
})

// GET /classrooms/new
router.get('/new',(req,res)=>{
    res.render('classrooms/new.ejs')
})

// GET /classrooms/:id
router.get('/:id',(req,res)=>{
    res.render('classrooms/show.ejs')
})


module.exports = router