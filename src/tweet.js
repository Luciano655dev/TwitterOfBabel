require("dotenv").config({ path: __dirname + "/.env" })
const tweetsJson = require("../views/tweets.json")
const { Status } = require('./status.js')
const { twitterClient } = require("./twitterClient.js")
const fs = require('fs') // 1 Tweet a cada 30 minutos (1800000ms = 30m)

async function Tweet(){
  try {
    const tweetsObj = tweetsJson
    const alfabeto = 'abcdefghijklmnopqrstuvwxyz'.split('')
    const str = []

    for(let i=0; i<280; i++){
        str.push(alfabeto[Math.round(Math.random() * (25 - 0) + 0)])
    }


    const { data: createdTweet } = await twitterClient.v2.tweet(str.join('')); // posta o tweet e armaneza seu ID

    tweetsObj.push({ text: str.join(''), id: createdTweet.id })
    fs.writeFile('views/tweets.json', JSON.stringify(tweetsObj, null, 2), async(err)=>{
      if(err)throw err
      await Status()
    })
  } catch (e) {
    console.log(e)
  }
}
Tweet()

module.exports = { Tweet }