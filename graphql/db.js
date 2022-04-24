import fetch from "node-fetch";

const API_URL = "https://yts.mx/api/v2/";

export const getMovies = async (limit, rating, sort_by) => {
  let REQUEST_URL = API_URL + "list_movies.json?";
  const defaultLimit = 20;
  const minLimit = 1;
  const maxLimit = 50;
  const defaultMinimumRating = 0;
  const minMinimumRating = 0;
  const maxMinimumRating = 9;
  let requestLimit = limit ?? defaultLimit;
  let requestMinimumRating = rating ?? defaultMinimumRating;

  if (requestLimit < minLimit) {
    requestLimit = minLimit;
  } else if (requestLimit > maxLimit) {
    requestLimit = maxLimit;
  }
  //console.log("requestLimit:", requestLimit);
  REQUEST_URL += `limit=${requestLimit}`;

  if (requestMinimumRating < minMinimumRating) {
    requestMinimumRating = minMinimumRating;
  } else if (requestMinimumRating > maxMinimumRating) {
    requestMinimumRating = maxMinimumRating;
  }
  //console.log("requestMinimumRating:", requestMinimumRating);
  REQUEST_URL += `&minimum_rating=${requestMinimumRating}`;

  //console.log(sort_by);
  if (sort_by) {
    REQUEST_URL += `&sort_by=${sort_by}`;
  }
  //console.log(REQUEST_URL);
  const response = await fetch(`${REQUEST_URL}`);
  const json = await response.json();
  //console.log(json.data.movies);

  return json.data.movies;
};

export const getById = async (id) => {
  let REQUEST_URL =
    API_URL + "movie_details.json?" + `movie_id=${id}` + "&with_cast=true";
  //console.log(REQUEST_URL);
  const response = await fetch(`${REQUEST_URL}`);
  const json = await response.json();
  //console.log(json.data.movie);
  return json.data.movie;
};

export const addMovie = (title, rating) => {
  const newMovie = {
    id: movies.length,
    title,
    rating,
  };
  movies.push(newMovie);
  return newMovie;
};

export const deleteMovie = (id) => {
  const cleanedMovies = movies.filter((movie) => movie.id !== id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};
