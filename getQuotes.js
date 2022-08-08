import renderingQuote from "./renderingQuote.js";
async function getQuotes() {
  const urlQuotes = `https://favqs.com/api/qotd`;
  const resQuotes = await fetch(urlQuotes);
  const dataQuotes = await resQuotes.json();
  await renderingQuote(dataQuotes);
}
export default getQuotes;