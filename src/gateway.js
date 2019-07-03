const { ApolloServer } = require("apollo-server");
const { ApolloGateway } = require("@apollo/gateway");
const config = require('../config');

const gateway = new ApolloGateway({
  serviceList: [
    ...config.services,
  ]
});

module.exports = async function initGateway() {
  const { schema, executor } = await gateway.load();
  return new ApolloServer({ schema, executor });
};
