import React from 'react';
import {commitMutation, graphql} from 'react-relay';
import environment from './environment';

// maximum length of tweet message allowed
const MAX_TWEET_LENGTH = 30;

// inform the user how many characters allowed are left
function TweetLengthMsg(props) {
  const word_remaining = MAX_TWEET_LENGTH - props.tweet_msg.length;

  if (word_remaining > 0) {
    return <p>You have {word_remaining} words remain</p>;
  } else {
    return <p>Oops! You can&rsquo;t type any further</p>;
  }
}

// text area to type tweet
function TweetText(props) {
  const msg = props.tweet_msg;
  const handleChange = props.handleChange;

  return (
    <textarea rows="4" cols="30"
      placeholder="Your tweet goes here ..."
      value={msg}
      onChange={event => handleChange(event)}
    />
  );
}

// button to submit tweet to server
function SubmitTweet(props) {
  const handleClick = props.handleClick;

  return (
    <button type="button" onClick={handleClick}>Submit</button>
  );
}

// class to put every single component together
class TweetBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweet_msg: '',
    };
  }

  // function triggered when user types tweet message
  // NOTE: babel transform-class-properties is needed
  // to prevent token error during compilation
  handleChange = (event) => {
    var str = event.target.value.slice(0, MAX_TWEET_LENGTH);

    this.setState({
      tweet_msg: str
    });
  }

  // function to submit tweet to server when button is clicked
  handleClick = () => {
    const mutation = graphql`
      mutation TweetBoxMutation($input: TweetInputType!) {
        insertTweet(input: $input) {
          tweet
        }
      }
    `;

    const variables = {
      input: {
        tweet: this.state.tweet_msg
      }
    };

    commitMutation(environment, {
      mutation,
      variables,
      onCompleted: (response) => {
        console.log("Success!")
      },
      onError: (err) => {
        console.log("err")
      }
    });
  }

  render() {
    return (
      <div>
        <TweetText tweet_msg={this.state.tweet_msg} handleChange={this.handleChange}/>
        <TweetLengthMsg tweet_msg={this.state.tweet_msg} />
        <SubmitTweet handleClick={this.handleClick} />
      </div>
    )
  }

}

export default TweetBox;
