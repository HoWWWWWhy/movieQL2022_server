import { getMovies, getById, deleteMovie, addMovie } from "./db.js";

const resolvers = {
  Query: {
    movies: (_, { limit, rating, sort_by }) =>
      getMovies(limit, rating, sort_by),
    movie: (_, { id }) => getById(id),
  },
  Mutation: {
    addMovie: (_, { title, rating }) => addMovie(title, rating),
    deleteMovie: (_, { id }) => deleteMovie(id),
  },
};

export default resolvers;
