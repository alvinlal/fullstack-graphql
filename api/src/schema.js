const { gql } = require("apollo-server");

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
  type Query {
    pets(input: petInput!): [Pet]!
    pet(input: petInput!): Pet
  }
  input petInput {
    name: String
    type: String
  }
  type User {
    id: ID!
    username: String!
  }
  type Pet {
    id: ID!
    createdAt: String!
    name: String!
    type: String
  }
`;

module.exports = typeDefs;
