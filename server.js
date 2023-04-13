const tweetsJson = require('./views/tweets.json')

const express = require('express')
const app = express()

// API MIDDELWARES
app.set('view engine', 'html')
app.use(express.static('views'))

app.get('/', async(req, res)=>{
    res.render('../views/index.ejs')
})

app.get('/api', async(req, res)=>{
    res.json(tweetsJson)
})

app.listen(3000, ()=>console.log(`sever started at http://localhost:3000/`))