export let movies = [
  {
    id: 0,
    name: "Star Wars",
    score: 1,
  },
  {
    id: 1,
    name: "Avengers",
    score: 8,
  },
  {
    id: 2,
    name: "The Godfather",
    score: 5,
  },
];

export const getMovies = () => movies;

export const getById = (id) => {
  const filteredMovies = movies.filter((movie) => movie.id === id);
  //console.log(filteredPeople);
  return filteredMovies[0];
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: movies.length,
    name,
    score,
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
