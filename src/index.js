import { ApolloServer } from "apollo-server";
import resolvers from "./graphql/resolvers.js";
import typeDefs from "./graphql/typeDefs.js";

//console.log("server");

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const PORT = process.env.PORT || 4000;

// The `listen` method launches a web server.
server.listen({ port: PORT }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
