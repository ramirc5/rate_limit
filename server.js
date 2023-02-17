const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    rateLimit: Int
  }
`);

const rootValue = {
  rateLimit: () => {
    // Insert code to check the rate limit here
    return 100; // For example, return a fixed rate limit of 100
  },
};

const app = express();

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: rootValue,
  graphiql: true, // Optional: enable the GraphiQL UI for testing the API
}));

app.listen(4006, () => {
  console.log('GraphQL API server is running on http://localhost:4006/graphql');
});