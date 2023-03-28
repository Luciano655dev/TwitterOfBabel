require("dotenv").config({ path: __dirname + "/.env" })
const { twitterClient } = require("./twitterClient.js")
const fs = require('fs')

let tweetsObj = [] // 1 Tweet a cada 30 minutos (1800000ms = 30m)

async function Tweet(){
  try {
    let alfabeto = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let str = []

    for(let i=0; i<280; i++){
        str.push(alfabeto[Math.round(Math.random() * (25 - 0) + 0)])
    }


    const { data: createdTweet } = await twitterClient.v2.tweet(str.join('')); // posta o tweet e armaneza seu ID

    tweetsObj.push({ text: str.join(''), id: createdTweet.id }) // Lembrar de trocar o nome
    fs.writeFile('src/tweets.json', JSON.stringify(tweetsObj, null, 2), (err)=>{ if(err)throw err })
  } catch (e) {
    console.log(e)
  }
}
Tweet()

module.exports = { Tweet }