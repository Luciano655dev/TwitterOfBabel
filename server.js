const Tweet = require('./src/tweet.js')
const tweetsJson = require('./src/tweets.json')

const express = require('express')
const app = express()

// API MIDDELWARES
app.set('view engine', 'ejs')
app.use(express.static('views'))

/*
async function start(){
    await Tweet()
    setInterval(async()=>await Tweet(), 1000)
}
start()
*/

app.get('/', (req, res)=>{
    res.render('../views/index.ejs', {tweetsJson})
})

app.get('/api', async(req, res)=>{
    res.json(tweetsJson)
})

app.listen(3000, ()=>console.log(`sever started at http://localhost:3000/`))