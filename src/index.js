require("dotenv").config({ path: __dirname + "/.env" })
const { twitterClient } = require("./twitterClient.js")
const fs = require('fs')

let tweetsObj = []

setInterval(async()=>{
  try {
    let alfabeto = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let str = []

    for(let i=0; i<280; i++){
        str.push(alfabeto[Math.round(Math.random() * (25 - 0) + 0)])
    }


    const { data: createdTweet } = await twitterClient.v2.tweet(str.join(''));

    tweetsObj.push({ text: str.join(''), src: `https://twitter.com/luciano655dev/status/${createdTweet.id}` })
    fs.writeFile('src/tweets.json', JSON.stringify(tweetsObj, null, 2), (err)=>console.log(err))

  } catch (e) {
    console.log(e)
  }
}, 1000); // 1 Tweet a cada 30 minutos (1800000ms = 30m)