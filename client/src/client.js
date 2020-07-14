import { ApolloClient } from 'apollo-client'; //use apolo boost for all these
import { InMemoryCache } from 'apollo-cache-inmemory'; //apolo packages
import { HttpLink } from 'apollo-link-http';
import gql from 'graphql-tag';

/**
 * Create a new apollo client and export as default
 */
const link = new HttpLink({ uri: 'https://rickandmortyapi.com/graphql' }); //for creating the httplink

const cache = new InMemoryCache(); //for creating the appolo cache

const client = new ApolloClient({
    link,
    cache,
});

const query = gql`
    {
        characters {
            results {
                name
            }
        }
    }
`;

client.query({ query }).then((result) => console.log(result));

export default client;
