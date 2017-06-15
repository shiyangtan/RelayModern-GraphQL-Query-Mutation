import ReactDOM from 'react-dom'
import React from 'react'
import TweetBox from './TweetBox'
import TweetList from './TweetList'
import SayHi from './SayHi'

ReactDOM.render(
  <div>
    <SayHi />
  </div>,
  document.getElementById('root')
)


// import {graphql, fetchQuery} from 'relay-runtime';
// import environment from './environment';
//
// fetchQuery(environment, graphql`
//   query TweetListQuery {
//     sayHi
//   }
// `).then((data) => {
//   ReactDOM.render(
//     <div>{data.sayHi}</div>,
//     document.getElementById('root')
//   )
// });
