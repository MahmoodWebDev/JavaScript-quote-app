// Initialize an empty array to hold the quotes
let quotes = [];

// This function will run when the webpage is loaded
window.onload = async function () {
  try {
    // Fetch the data from the API using a CORS proxy
    const response = await fetch(
      "https://api.allorigins.win/raw?url=https://type.fit/api/quotes"
    );
    // Convert the response to JSON format
    const data = await response.json();
    // Store the quotes data in the quotes array
    quotes = data;
    // Generate an initial quote
    generateQuote();
  } catch (err) {
    // If an error occurs during the fetch request, log the error and display a message on the webpage
    console.error(err);
    document.getElementById("quote-text").innerText = "An error occurred";
    document.getElementById("quote-author").innerText = "";
  }
};

// Add a click event listener to the quote button
document
  .getElementById("quote-button")
  .addEventListener("click", generateQuote);

// This function generates a random quote
function generateQuote() {
  // Check if there are any quotes in the quotes array
  if (quotes.length > 0) {
    // Generate a random index
    let randomIndex = Math.floor(Math.random() * quotes.length);
    // Select a random quote using the random index
    let randomQuote = quotes[randomIndex];
    // Display the random quote text on the webpage
    document.getElementById("quote-text").innerText = randomQuote.text;
    // Display the random quote author on the webpage, or "Unknown" if the author is null
    document.getElementById("quote-author").innerText = randomQuote.author
      ? `- ${randomQuote.author}`
      : "- Unknown";
  }
}
