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

// define input type for tweet
var tweetInputType = new graphql.GraphQLInputObjectType({
  name: "TweetInputType",
  fields: {
    tweet: {type: new graphql.GraphQLNonNull(graphql.GraphQLString)},
  },
});

// define mutation type
var mutationType = new graphql.GraphQLObjectType({
  name: "Mutation",
  fields: {
    insertTweet: {
      type: tweetType,
      args: {
        input: {type: tweetInputType},
      },
      resolve: (_, {input}) => {
        tweetArray.push({tweet: input.tweet});
        return tweetArray[tweetArray.length - 1];
      },
    },
  },
});

module.exports = new graphql.GraphQLSchema({
  query: queryType,
  mutation: mutationType
});
