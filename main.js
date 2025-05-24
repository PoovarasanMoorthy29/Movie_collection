const API_KEY = '41d7efd63f1e8d73e7c5c7be7232b3f3';  // Replace with your actual TMDB API key
const COLLECTION_ID = 1241;  // For Harry Potter
const API_URL = `https://api.themoviedb.org/3/collection/${COLLECTION_ID}?api_key=${API_KEY}&language=en-US`;

const IMAGE_URL = "https://image.tmdb.org/t/p/w200";

async function fetchMovieCollection() {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();

    const movies = data.parts;
    displayMovies(movies);
  } catch (err) {
    console.error("Error fetching movie data:", err);
  }
}

function displayMovies(movies) {
  const container = document.getElementById("movie-list");

  movies.forEach(movie => {
    const card = document.createElement("div");
    card.className = "movie-card";

    const img = document.createElement("img");
    img.src = IMAGE_URL + movie.poster_path;
    img.alt = movie.title;

    const details = document.createElement("div");
    details.className = "movie-details";
    details.innerHTML = `
      <h2>${movie.title}</h2>
      <p><strong>Release:</strong> ${movie.release_date}</p>
      <p>${movie.overview}</p>
    `;

    card.appendChild(img);
    card.appendChild(details);
    container.appendChild(card);
  });
}

fetchMovieCollection();
