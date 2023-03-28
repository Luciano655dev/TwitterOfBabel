require("dotenv").config({ path: __dirname + "/.env" })
const { twitterClient } = require("./twitterClient.js")
const tweetsJson = require('./tweets.json')

async function Status(){
    const statusObj = []
    for(let tweet of tweetsJson){
        const status = await twitterClient.v2.singleTweet(tweet.id, {
            expansions: ['attachments.media_keys', 'author_id'],
            'media.fields': ['url'],
            'tweet.fields': ['public_metrics'],
            'user.fields': ['username'],
        })

        statusObj.push({
            likes: status.data.public_metrics.like_count || 0,
            retweets: status.data.public_metrics.retweet_count || 0,
            comments: status.data.public_metrics.reply_count || 0
        })
    }
    return statusObj
}
Status()

module.exports = {Status}
