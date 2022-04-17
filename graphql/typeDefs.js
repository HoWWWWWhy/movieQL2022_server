import { gql } from "apollo-server";

const typeDefs = gql`
  type Person {
    id: Int!
    name: String!
    age: Int!
    gender: String!
  }

  type Query {
    people: [Person]!
    person(id: Int!): Person
  }
`;

export default typeDefs;
