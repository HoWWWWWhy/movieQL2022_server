import { gql } from "apollo-server";

const typeDefs = gql`
  type Movie {
    id: Int!
    title: String!
    rating: Float!
    year: String!
    description_full: String
    language: String!
    medium_cover_image: String!
    imdb_code: String!
    cast: [Cast]
  }

  type Cast {
    name: String!
    character_name: String!
    url_small_image: String!
  }

  type Query {
    movies(
      limit: Int
      rating: Float
      sort_by: String
      order_by: String
    ): [Movie]!
    movie(id: Int!): Movie
  }

  type Mutation {
    addMovie(title: String!, rating: Float!): Movie!
    deleteMovie(id: Int!): Boolean!
  }
`;

export default typeDefs;
