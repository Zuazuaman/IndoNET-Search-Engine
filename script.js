document.addEventListener("DOMContentLoaded", function() {
  const searchButton = document.getElementById("searchButton");
  const searchQuery = document.getElementById("searchQuery");
  const searchResults = document.getElementById("searchResults");
  const apiKey = "AIzaSyCreNDAqQqiKjQ22nB_XKi5-P5Wyi6Cy8A";
  const cx = "0486c1c46fe244312";

  searchButton.addEventListener("click", function() {
    const query = searchQuery.value;
    const url = `https://www.googleapis.com/customsearch/v1?q=${query}&key=${apiKey}&cx=${cx}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        displayResults(data.items);
      })
      .catch(error => {
        console.error("Error fetching search results:", error);
      });
  });

  function displayResults(results) {
    let html = "";
    results.forEach(result => {
      const domain = new URL(result.link).hostname; // Mendapatkan nama domain dari URL
      html += `<div class="search-result">
                  <h3><a href="${result.link}" target="_blank">${result.title}</a></h3>
                  <p class="domain">${domain}</p>
                  <p>${result.snippet}</p>
                  <div class="result-thumbnail">
                    <img src="${result.pagemap.cse_thumbnail[0].src}" alt="Thumbnail">
                  </div>
                </div>`;
    });
    searchResults.innerHTML = html;
  }
});

  
