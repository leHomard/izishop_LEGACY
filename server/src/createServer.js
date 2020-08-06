const { GraphQLServer } = require("graphql-yoga");

const { createContext } = require("./context");
const { schema } = require('./schema');

function createServer() {
  return new GraphQLServer({
    schema,
    resolverValidationOptions: {
      requireResolversForResolveType: false,
    },
    context: createContext
  });
}

module.exports = createServer;
