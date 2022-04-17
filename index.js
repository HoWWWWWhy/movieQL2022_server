import { ApolloServer, gql } from "apollo-server";
import resolvers from "./graphql/resolvers";
import typeDefs from "./graphql/typeDefs";

console.log("server");

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
