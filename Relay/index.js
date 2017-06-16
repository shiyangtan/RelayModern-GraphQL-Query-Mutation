import ReactDOM from 'react-dom'
import React from 'react'
import TweetBox from './TweetBox'
import TweetList from './TweetList'
import SayHi from './SayHi'

ReactDOM.render(
  <div>
    <TweetBox />
    <TweetList />
  </div>,
  document.getElementById('root')
)
