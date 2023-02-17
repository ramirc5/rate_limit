To test the API, you can use the following GraphQL query:

```javascript
{
  rateLimit(token: "YOUR_GITHUB_TOKEN")
}
```
Replace YOUR_GITHUB_TOKEN with your actual GitHub personal access token. The query should return the remaining rate limit for the token. 

```query {
  rateLimit(token: "YOUR_GITHUB_TOKEN")
}```
