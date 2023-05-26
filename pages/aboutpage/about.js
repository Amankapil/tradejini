const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

console.log("working");

searchInput.addEventListener("input", function () {
  const searchTerm = searchInput.value.toLowerCase();
  const matchedItems = [];

  const pageContent = document.body.innerText.toLowerCase();

  if (searchTerm.trim() !== "") {
    const regex = new RegExp(searchTerm, "gi");
    const matches = pageContent.match(regex);

    if (matches) {
      const uniqueMatches = [...new Set(matches)];
      matchedItems.push(...uniqueMatches);
    }
  }

  displaySearchResults(matchedItems);
});

function displaySearchResults(items) {
  if (items.length > 0) {
    const resultsHTML = items.map((item) => `<p>${item}</p>`).join("");
    searchResults.innerHTML = resultsHTML;
  } else {
    searchResults.innerHTML = "<p>No results found.</p>";
  }
}
