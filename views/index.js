const tweetsJsonSrc = '../src/tweets.json'
function createTweet(tweetsJson){
    const container = document.querySelector('.container')

    // Primeira div
    const tweetWrap = document.createElement('div')
    tweetWrap.className = 'tweet-wrap'
    // tweetWrap.onclick = window.open(`https://twitter.com/luciano655dev/status/${tweetsJson.id}`)

    // Header
    const tweetHeader = document.createElement('div')
    tweetHeader.className = 'tweet-header'
    tweetHeader.innerHTML = `
        <img class="avator" src="https://pbs.twimg.com/profile_images/1632524718732443648/pMiGsE5f_400x400.jpg" alt="">
        <div class="tweet-header-info">
            Twitter of Babel 
            <span>@BabelTw1tter</span> <span> <!-- Date here --> </span> 
            <p>${tweetsJson.text}</p>
        </div>
    `
    tweetWrap.appendChild(tweetHeader)

    // Tweet Info Counts
    const tweetInfoCounts = document.createElement('div')
    tweetInfoCounts.className = 'tweet-info-counts'

        // Comments
        tweetInfoCounts.innerHTML += `
            <div class="comments">
                <svg class="feather feather-message-circle sc-dnqmqq jxshSx" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                <div class="comment-count">${tweetsJson.comments}</div>
            </div>
        `
        // Retweets
        tweetInfoCounts.innerHTML += `
            <div class="retweets">
                <svg class="feather feather-repeat sc-dnqmqq jxshSx" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path></svg>
                <div class="retweet-count">${tweetsJson.retweets}</div>
            </div>
        `
        // Likes
        tweetInfoCounts.innerHTML += `
            <div class="likes">
                <svg class="feather feather-heart sc-dnqmqq jxshSx" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                <div class="likes-count">${tweetsJson.likes}</div>
            </div>
        `
    tweetWrap.appendChild(tweetInfoCounts)

    container.appendChild(tweetWrap)
}

function homeScreen(){
    fetch('./tweets.json').then(res => res.json()).then(tweetsJson => {
        for(let i in tweetsJson){
            createTweet(tweetsJson[i])
        }
    })
}
homeScreen()

function search(){
    const textSearched = document.querySelector('.textBox').value

    fetch('./tweets.json').then(res => res.json()).then(tweetsJson => {
        const tweetsJsonFilter = tweetsJson.filter(val => val.text.toLowerCase().includes(textSearched))
        if(tweetsJsonFilter == []){ document.querySelector('.container').innerHTML = '<h1>Nada encontrado</h1>' }else{
            document.querySelector('.container').innerHTML = ''
            for(let i in tweetsJsonFilter){
                createTweet(tweetsJsonFilter[i])
            }
        }
    })
}