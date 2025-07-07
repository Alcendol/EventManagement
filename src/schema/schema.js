const Query = require('./Query.js');
const Mutation = require('./Mutation.js');

module.exports = new GraphQLSchema({
  query: Query,
  // mutation
});
