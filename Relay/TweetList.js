import React from 'react';
import {QueryRenderer, graphql} from 'react-relay';
import Tweet from './Tweet';
import environment from './environment';

// class to get tweet message from server
class TweetList extends React.Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query TweetListQuery {
            tweet {
              ...Tweet
            }
          }
        `}
        render={({error, props}) => {
          if (error) {
            return <div>{error.message}</div>;
          } else if (props) {
            return (
              <div>{props.tweet.map(tweet => <Tweet data={tweet} />)}</div>
            );
          } else {
            return <div>Loading</div>;
          }
        }}
      />
    );    
  }
}

export default TweetList;
