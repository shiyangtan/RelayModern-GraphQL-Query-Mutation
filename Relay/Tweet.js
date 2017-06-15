import React from 'react';
import {graphql, createFragmentContainer} from 'react-relay';

// component to display a single tweet message
class Tweet extends React.Component {
  render() {
    const tweet = this.props.data;

    return (
      <div>
        <p>{tweet.tweet}</p>
      </div>
    );
  }
}

export default createFragmentContainer(
  Tweet,
  graphql`
    fragment Tweet on Tweet {
      tweet
    }
  `,
);
