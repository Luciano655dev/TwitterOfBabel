require("dotenv").config({ path: __dirname + "/.env" });
const { twitterClient } = require("./src/twitterClient.js")
let data = new Date()

const tweet = async () => {
  try {

    let alfabeto = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let str = []

    for(let i=0; i<280; i++){
        str.push(alfabeto[Math.round(Math.random() * (25 - 0) + 0)])
    }
    console.log(data);
   //  await twitterClient.v2.tweet(str.join(''));

  } catch (e) {
    console.log(e)
  }
}

tweet();