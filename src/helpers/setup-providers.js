import { ApolloClient, gql, InMemoryCache } from "@apollo/client";

export const typeDefs = gql `
  extend type Query {
    isLoggedIn: Boolean!
    cartItems: [ID!]!
  }
`;

// initialize a GraphQL client
export const client = new ApolloClient({
    cache: new InMemoryCache(),
    storage: window.localStorage,
    uri: 'https://countries.trevorblades.com',
    typeDefs,
});