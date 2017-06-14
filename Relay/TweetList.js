import React from 'react';

// component to display a single tweet message
function SingleTweet (props) {
  const tweetMsg = props.tweetMsg;

  return (
    <div>
      <p>{tweetMsg}</p>
    </div>
  )
}

// class to get tweet message from server
class TweetList extends React.Component {
  render() {
    return (
      <div>
        <SingleTweet tweetMsg="Hi" />
      </div>
    )
  }
}

export default TweetList;
