function renderingQuote(dataQuote) {
    const quoteBox = document.querySelector('.quotes-container')
    const quoteAuthor = document.querySelector(".quote-author");
    quoteBox.innerHTML = `''${dataQuote.quote.body}''`;
    quoteAuthor.innerHTML += dataQuote.quote.author;
}
export default renderingQuote;