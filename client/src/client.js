import { ApolloClient } from 'apollo-client'; //use apolo boost for all these
import { InMemoryCache } from 'apollo-cache-inmemory'; //apolo packages
import { HttpLink } from 'apollo-link-http';
import gql from 'graphql-tag';

/**
 * Create a new apollo client and export as default
 */
const link = new HttpLink({ uri: 'http://localhost:4000' }); //for creating the httplink

const cache = new InMemoryCache(); //for creating the appolo cache

const client = new ApolloClient({
    link,
    cache,
});

export default client;
