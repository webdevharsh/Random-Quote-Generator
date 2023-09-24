let newQuoteBtn = document.querySelector('.container .new-quote-btn');
let tweetBtn = document.querySelector('.container .tweet-btn');
let quote = document.querySelector('.container .quote p');
let author = document.querySelector('.container .quote h6');

newQuoteBtn.addEventListener('click',()=>{
  const url = "https://api.quotable.io/random";
  fetch(url).then(res => res.json()).then(data =>{
    quote.innerHTML = data.content;
    author.innerHTML = '--' + data.author;
  }) 
})

tweetBtn.addEventListener('click',()=>{
 let tweetUrl = `https://twitter.com/intent/tweet?url=${quote.innerText}                              ${author.innerText}`;
window.open(tweetUrl, "_blank");       
})

newQuoteBtn.click();
