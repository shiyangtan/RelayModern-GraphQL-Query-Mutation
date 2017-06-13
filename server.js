const express = require('express')
const app = express()
const path = require('path')

// serve static files
app.use(express.static('build'))

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/html/tweet.html'))
})

app.listen(3000, function(){
  console.log('Example app listening on port 3000!')
})
