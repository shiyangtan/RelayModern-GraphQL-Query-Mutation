const graphql = require('graphql');

// define tweet type
var tweetType = new graphql.GraphQLObjectType({
  name: "Tweet",
  fields: {
    tweet: {
      type: graphql.GraphQLString
    },
  },
});

// define query type
var queryType = new graphql.GraphQLObjectType({
  name: "Query",
  fields: {
    tweet: {
      type: new graphql.GraphQLList(tweetType),
      resolve: () => {
        return [{tweet: "First string"}, {tweet: "Second string"}];
      },
    },

    sayHi: {
      type: graphql.GraphQLString,
      resolve: () => {
        return 'Hi from GraphQL';
      }
    }
  },
});

module.exports = new graphql.GraphQLSchema({
  query: queryType
});
