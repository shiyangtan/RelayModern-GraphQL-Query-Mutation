var fs = require('fs');
var path = require('path');
var {graphql} = require('graphql');
var {introspectionQuery, printSchema, buildClientSchema} = require('graphql/utilities');

// import GraphQL schema defined programmatically
var Schema = require('../graphql/schema.js');

// output file, without extension
var outputFile = path.join(__dirname, '../graphql/schema');


/*
  NO MODIFICATION BELOW
*/
console.log(`Running ${__filename}`);

// Save JSON of full schema introspection for Babel Relay Plugin to use
graphql(Schema, introspectionQuery).then((result) => {
  fs.writeFileSync(
    path.join(`${outputFile}.json`),
    JSON.stringify(result, null, 2)
  );
}).catch((err) => {
  console.log(err);
});

// Save user readable type system shorthand of schema
fs.writeFileSync(
  `${outputFile}.graphql`,
  printSchema(Schema)
);
