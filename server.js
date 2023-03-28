const {Tweet} = require('./src/tweet.js')
const {Status} = require('./src/status.js')
const tweetsJson = require('./src/tweets.json')

const express = require('express')
const app = express()
/*
async function Start(){
    await Tweet()
    setInterval(async()=>await Tweet(), 1000)
}
Start()
*/

// API MIDDELWARES
app.set('view engine', 'ejs')
app.use(express.static('views'))

app.get('/', async(req, res)=>{
    const status = await Status()
    res.render('../views/index.ejs', {tweetsJson, status})
})

app.get('/api', async(req, res)=>{
    res.json(tweetsJson)
})

app.listen(3000, ()=>console.log(`sever started at http://localhost:3000/`))