import { getMovies, getById, deleteMovie, addMovie } from "./db.js";

const resolvers = {
  Query: {
    movies: (_, { limit, rating }) => getMovies(limit, rating),
    movie: (_, { id }) => getById(id),
  },
  Mutation: {
    addMovie: (_, { title, rating }) => addMovie(title, rating),
    deleteMovie: (_, { id }) => deleteMovie(id),
  },
};

export default resolvers;
