const API_URL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const SEARCH_URL =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

getMovies();

async function getMovies() {
  const response = await fetch(API_URL);
  const responseData = await response.json();

  showCards(responseData.results);
}

function showCards(movies = []) {
  //   console.log(movies);
  movies.forEach((movie) => {
    console.log(movie);
  });
}
