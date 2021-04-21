const express = require('express')
const path = require('path')
const { Center,Season,Course,Batch } = require('./db/model')

const app = express()

app.set('view engine','hbs')
app.set('views',path.resolve(__dirname+ '/views'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/batchcode', async (req,res)=> {
    try {
        const center = await Center.findAll()
        const season = await Season.findAll()
        const course = await Course.findAll()
        const year = [2016,2017,2018,2019,2020,2021]

        res.render('batchcode', {
            course,center,season,year
        })


    }catch(e) {
        console.log(e)
    }
})

app.post('/batchcode',async (req,res) => {
    let batchcode = ''
    batchcode += req.body.center
    batchcode += req.body.season
    batchcode += req.body.course
    batchcode += req.body.year.substr(2)
    batchcode += req.body.batch

    res.send(batchcode)
    try{
        const batch = await Batch.create({
            code : batchcode,
            year : req.body.year,
            courseId : req.body.course,
            centerId : req.body.center,
            seasonId : req.body.season,
            start : Date.parse(req.body.start),
            end: Date.parse(req.body.end)
        })
    } catch(e) {
        console.log(e)
    }
})
app.get('/batches', async (req,res)=> {
    try{
        const batch = await Batch.findAll({
            include : [Course,Season,Center]
        })

        res.render('batches',{batch})
    }catch(e) {
        console.log(e)
    }
})

module.exports = {app}