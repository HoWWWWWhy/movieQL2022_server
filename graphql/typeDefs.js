import { gql } from "apollo-server";

const typeDefs = gql`
  type Movie {
    id: Int!
    name: String!
    score: Int!
  }

  type Query {
    movies: [Movie]!
    movie(id: Int!): Movie
  }

  type Mutation {
    addMovie(name: String!, score: Int!): Movie!
    deleteMovie(id: Int!): Boolean!
  }
`;

export default typeDefs;
