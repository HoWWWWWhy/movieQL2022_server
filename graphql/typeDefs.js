import { gql } from "apollo-server";

const typeDefs = gql`
  type Movie {
    id: Int!
    title: String!
    rating: Float!
    summary: String!
    language: String!
    medium_cover_image: String!
  }

  type Query {
    movies(limit: Int, rating: Float): [Movie]!
    movie(id: Int!): Movie
  }

  type Mutation {
    addMovie(title: String!, rating: Float!): Movie!
    deleteMovie(id: Int!): Boolean!
  }
`;

export default typeDefs;
