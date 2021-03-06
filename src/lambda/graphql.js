// src/lambda/graphql.js
const { ApolloServer, gql } = require("apollo-server-lambda");

try {
    require('encoding')
  } catch (error) {}

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: (root, args, context) => {
      return "Hello, world!";
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true
});

exports.handler = server.createHandler();