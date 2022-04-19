import fetch from "node-fetch";

const API_URL = "https://yts.mx/api/v2/list_movies.json?";

export const getMovies = async (limit, rating) => {
  let REQUEST_URL = API_URL;
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

  const response = await fetch(`${REQUEST_URL}`);
  const json = await response.json();
  return json.data.movies;
  //console.log(json.data.movies);
};

//export const getMovies = () => movies;

export const getById = (id) => {
  const filteredMovies = movies.filter((movie) => movie.id === id);
  //console.log(filteredPeople);
  return filteredMovies[0];
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

// export let movies = [
//   {
//     id: 0,
//     name: "Star Wars",
//     score: 1,
//   },
//   {
//     id: 1,
//     name: "Avengers",
//     score: 8,
//   },
//   {
//     id: 2,
//     name: "The Godfather",
//     score: 5,
//   },
// ];
