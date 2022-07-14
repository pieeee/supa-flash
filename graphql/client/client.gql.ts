import { ApolloClient, InMemoryCache } from "@apollo/client";

export const graphqlClient = new ApolloClient({
  uri: "/api/graphql",
  cache: new InMemoryCache({ addTypename: false }),
});
