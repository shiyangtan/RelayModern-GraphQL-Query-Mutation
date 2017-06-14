const express = require('express')
const path = require('path')
const graphqlHTTP = require('express-graphql')
const schema = require('./graphql/schema')

const app = express()

// serve static files
app.use(express.static('build'))

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/html/tweet.html'))
})

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}))

app.listen(3000, function(){
  console.log('Server is listening on port 3000!')
})
