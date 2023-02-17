const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const { Octokit } = require('@octokit/core');

const schema = buildSchema(`
  type Query {
    rateLimit(token: String!): Int
  }
`);

const rootValue = {
  rateLimit: async ({ token }) => {
    const octokit = new Octokit({ auth: token });
    const response = await octokit.request('GET /rate_limit');
    return response.data.rate.remaining;
  },
};

const app = express();

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: rootValue,
  graphiql: true,
}));

app.listen(4006, () => {
  console.log('GraphQL API server is running on http://localhost:4006/graphql');
});