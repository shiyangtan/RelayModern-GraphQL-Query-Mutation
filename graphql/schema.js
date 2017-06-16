const graphql = require('graphql');

// some dummy data
var tweetArray = [{tweet: "First tweet"}, {tweet: "Second tweet"}];

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
        return tweetArray;
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

// define mutation type
var mutationType = new graphql.GraphQLObjectType({
  name: "Mutation",
  fields: {
    insertTweet: {
      type: tweetType,
      args: {
        tweet: {type: new graphql.GraphQLNonNull(graphql.GraphQLString)},
      },
      resolve: (_, {tweet}) => {
        tweetArray.push({tweet: tweet});
        return tweetArray[tweetArray.length - 1];
      },
    },
  },
});

module.exports = new graphql.GraphQLSchema({
  query: queryType,
  mutation: mutationType
});
