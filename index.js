const backgroundDisplay = document.querySelector('body')
const newQuoteButton = document.getElementById('new-quote')
const quoteBox = document.getElementById('quote-box')
const quoteText = document.getElementById('text')
const author = document.getElementById('author')
const twitterButton = document.getElementById('tweet-quote')
const textToSpeechButton = document.getElementById('speech')

// changes background and text color randomly
function changeColor() {
    const randomColorGenerator = Math.floor(Math.random() * (256 * 256 * 256)).toString(16).padStart(6, '0')
    backgroundDisplay.style.backgroundColor = `#${randomColorGenerator}`
    newQuoteButton.style.backgroundColor = `#${randomColorGenerator}`
    textToSpeechButton.style.backgroundColor = `#${randomColorGenerator}`
    twitterButton.style.backgroundColor = `#${randomColorGenerator}`
    quoteText.style.color = `#${randomColorGenerator}`
    author.style.color = `#${randomColorGenerator}`
}

function randomQuote() {
    fetch('https://api.quotable.io/random').then(res => res.json()).then(result => {
        quoteText.innerHTML = `<i class="fa-solid fa-quote-left"></i> ${result.content}`
        author.innerHTML = '- ' + result.author
    })
}

textToSpeechButton.addEventListener('click', () => {
    let speech = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${author.innerHTML}`)
    speechSynthesis.speak(speech)
})

twitterButton.addEventListener('click', () => {
    let tweetURL = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`
    window.open(tweetURL, "_blank")
})

newQuoteButton.addEventListener('click', changeColor)
newQuoteButton.addEventListener('click', randomQuote)
changeColor()
randomQuote()

