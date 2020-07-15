import { ApolloClient } from 'apollo-client'; //use apolo boost for all these
import { InMemoryCache } from 'apollo-cache-inmemory'; //apolo packages
import { HttpLink } from 'apollo-link-http';
import gql from 'graphql-tag';
import { ApolloLink } from 'apollo-link';
import { setContext } from 'apollo-link-context';
/**
 * Create a new apollo client and export as default
 */

const typeDefs = gql`
    extend type User {
        age: Int
    }
    extend type Pet {
        vaccinated: Boolean
    }
`;
const resolvers = {
    User: {
        age() {
            return Math.floor(Math.random() * 100);
        },
    },
    Pet: {
        vaccinated() {
            return true;
        },
    },
};

const delay = setContext(
    (request) =>
        new Promise((success, fail) => {
            setTimeout(() => {
                success();
            }, 800);
        }),
);

const http = new HttpLink({ uri: 'http://localhost:4000' }); //for creating the httplink

const cache = new InMemoryCache(); //for creating the appolo cache
const link = ApolloLink.from([delay, http]);

const client = new ApolloClient({
    link,
    cache,
    typeDefs,
    resolvers,
});

export default client;
