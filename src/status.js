require("dotenv").config({ path: __dirname + "/.env" })
const fs = require('fs')
const { twitterClient } = require("./twitterClient.js")
const tweetsJson = require('../views/tweets.json')

async function Status(){
    for(let tweet in tweetsJson){
        const status = await twitterClient.v2.singleTweet(tweetsJson[tweet].id, {
            expansions: ['attachments.media_keys', 'author_id'],
            'media.fields': ['url'],
            'tweet.fields': ['public_metrics'],
            'user.fields': ['username'],
        })

        tweetsJson[tweet].likes = status.data.public_metrics.like_count
        tweetsJson[tweet].retweets = status.data.public_metrics.retweet_count
        tweetsJson[tweet].comments = status.data.public_metrics.reply_count
    }
    fs.writeFile('views/tweets.json', JSON.stringify(tweetsJson, null, 2), (err)=>{ if(err)throw err })
    return
}
Status()

module.exports = {Status}
