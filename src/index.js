require("dotenv").config({ path: __dirname + "/.env" });
const { twitterClient } = require("./twitterClient.js")

setInterval(async()=>{
  try {
    let alfabeto = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let str = []

    for(let i=0; i<280; i++){
        str.push(alfabeto[Math.round(Math.random() * (25 - 0) + 0)])
    }
    await twitterClient.v2.tweet(str.join(''));

  } catch (e) {
    console.log(e)
  }
}, 1800000); // 1 Tweet a cada 30 minutos (1800000ms = 30m)