const { ApolloServer } = require("apollo-server");
const { ApolloGateway } = require("@apollo/gateway");

const gateway = new ApolloGateway({
  serviceList: [
    // List of federation-capable GraphQL endpoints...
  ]
});

module.exports = async () => {
  const { schema, executor } = await gateway.load();
  return new ApolloServer({ schema, executor });
};
